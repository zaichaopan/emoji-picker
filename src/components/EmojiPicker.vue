<template>
    <click-outside :do="close">
        <div class="emoji-picker">
            <div class="emoji-invoker"
                 ref="emojiInvoker">
                <span class="invoker-icon pointer"
                      ref="emojiInvokerIcon"
                      @click="toggleDropdown">
                    <span v-if="isInvokerHovered || show"
                          @mouseleave="isInvokerHovered = false"
                          v-html="emojiInvokerOpen">
                    </span>

                    <span v-else
                          class="show"
                          @mouseenter="isInvokerHovered = true"
                          v-html="emojiInvokerClose">;
                    </span>
                </span>
            </div>
            <div v-show="show"
                 class="emoji-dropdown"
                 ref="emojiDropdown">
                <div class="header">
                    <span v-for="(val,key) in categories"
                          :key="key"
                          :title="val"
                          :class="{active: key === scrolledTo}"
                          class="pointer"
                          @click="scrollToCategory(key)"
                          v-html="val">
                    </span>
                </div>

                <div class="search">
                    <span class="search-icon"
                          v-html="searchSVG">
                    </span>
                    <input type="text"
                           v-model="search"
                           placeholder="Search" />
                </div>

                <div v-if="Object.keys(emojis).length===0"
                     class="emojis"
                     ref="emojis">
                    <span class="result-info">No emojis found.</span>
                </div>
                <div v-else
                     class="emojis"
                     ref="emojis">
                    <div v-for="(items, category) in emojis"
                         :key="category">
                        <div class="category"
                             :ref="getCategoryRef(category)">{{category}}
                        </div>

                        <div class="emoji-list">
                            <span v-for="(item, index) in items"
                                  class="emoji pointer"
                                  :key="index"
                                  :title="item.aliases"
                                  @click="selectEmoji(item)"
                                  @mouseleave="handleMouseLeaveEmoji"
                                  @mouseenter="handleMouseEnterEmoji(item)">
                                {{ item.emoji }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="footer"
                     @mouseleave="handleMouseLeaveFooter">
                    <div class="title"
                         v-if="hoveredEmoji === null">
                        Emoji Deluxe
                    </div>

                    <div v-else
                         class="emoji-preview">
                        <div class="emoji">
                            {{ hoveredEmoji.emoji}}
                        </div>

                        <div class="alias-container">
                            <div class="title">
                                &nbsp;{{hoveredEmoji.aliases[0]}} &nbsp;
                            </div>
                            <div class="alias">
                                {{ `:${hoveredEmoji.aliases[0]}:`}}
                            </div>

                        </div>
                    </div>

                    <div class="ton-picker">
                        <div class="hands-container">
                            <div class="hands">
                                <span v-for="(item,index) in getToneHands()"
                                      :key="index"
                                      v-if="item.name === getDefaultSkinTon().name || showSkinTonPickers"
                                      @click="setDefaultSkinTon(item)"
                                      class="hand">
                                    {{ item.emoji}}
                                </span>
                            </div>
                            <div class="tip"
                                 v-if="showSkinTonPickers">
                                Choose you defualt skin ton
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </click-outside>
</template>

<script>
import Popper from 'popper.js';
import skinTone from 'skin-tone';
import ClickOutside from './ClickOutside.vue';
import frequentlyUsed from '../../data/frequently-used';
import {categories, searchSVG, emojiInvokerOpen, emojiInvokerClose} from '../../data/svg.js';

const DEFUALT_SKIN_TON = 'default_skin_ton';
const FREQUENTLY_USED = 'frequently_used';
const FREQUENTLY_USED_CATEGORY_NAME = 'Frequently Used';
const FREQUENTLY_USED_EMOJIS = 'frequently_used_emojis';
const skinToneNames = [
  { name: 'NONE' },
  { name: 'WHITE' },
  { name: 'CREAM_WHITE' },
  { name: 'LIGHT_BROWN' },
  { name: 'BROWN' },
  { name: 'DARK_BROWN' }
];

export default {
  name: 'EmojiPicker',
  components: {
    ClickOutside
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      show: false,
      search: '',
      popper: null,
      skinTonPickers: [],
      hoveredEmoji: null,
      emojiInvoker: null,
      emojiDropdown: null,
      selectedEmoji: null,
      searchSVG: searchSVG,
      categorizedEmojis: {},
      categories: categories,
      emojiInvokerIcon: null,
      isInvokerHovered: false,
      showSkinTonPickers: false,
      emojiInvokerClose: emojiInvokerClose,
      emojiInvokerOpen: emojiInvokerOpen,
      scrolledTo: FREQUENTLY_USED
    };
  },
  watch: {
    search () {
      if (this.search !== '') {
        this.scrolledTo = FREQUENTLY_USED;
      }
    },
    show () {
      if (!this.show) {
        this.search = '';
      }

      this.$nextTick(() => {
        this.setupPopper();
      });
    }
  },
  computed: {
    emojis () {
      return this.search ? this.filteredEmojis() : this.categorizedEmojis;
    }
  },
  methods: {
    open () {
      this.show = true;
    },
    close () {
      this.show = false;
    },
    toggleDropdown () {
      this.show ? this.close() : this.open();
    },
    setFrequentUsedEmoji (emojiObj) {
      const maxLength = 9;
      let frequentUsedEmojis = this.getFrequentUsedEmojis().filter(item => item.description !== emojiObj.description);
      emojiObj.category = FREQUENTLY_USED_CATEGORY_NAME;
      frequentUsedEmojis = [...frequentUsedEmojis, emojiObj];

      if (frequentUsedEmojis.length > maxLength) {
        frequentUsedEmojis.shift();
      }

      localStorage.setItem(FREQUENTLY_USED_EMOJIS, JSON.stringify(frequentUsedEmojis));
      this.categorizedEmojis[FREQUENTLY_USED_CATEGORY_NAME] = frequentUsedEmojis;
    },
    getFrequentUsedEmojis () {
      let frequentUsedEmojis = localStorage.getItem(FREQUENTLY_USED_EMOJIS);

      if (frequentUsedEmojis === null) {
        frequentUsedEmojis = frequentlyUsed;
      }

      if (!Array.isArray(frequentUsedEmojis)) {
        frequentUsedEmojis = JSON.parse(frequentUsedEmojis);
      }
      return frequentUsedEmojis;
    },
    selectEmoji (emojiObj) {
      this.$emit('emoji:picked', emojiObj.emoji);
      this.setFrequentUsedEmoji(emojiObj);
      this.close();
    },
    scrollToCategory (category) {
      let [element] = this.$refs[category];
      element && element.scrollIntoView(true);
    },
    handleScroll () {
      let emojis = this.$refs.emojis;
      emojis.addEventListener('scroll', e => {
        if (this.search) {
          return;
        }

        Object.keys(this.categories).forEach(category => {
          let [element] = this.$refs[this.getCategoryRef(category)];
          if (element && emojis.scrollTop >= element.offsetTop) {
            this.scrolledTo = category;
          }
        });
      });
    },
    filteredEmojis () {
      let filteredEmojis = {};
      for (let category in this.categorizedEmojis) {
        this.categorizedEmojis[category].forEach(emoji => {
          if (!~emoji.description.toLowerCase().indexOf(this.search.toLowerCase())) {
            return;
          }
          if (!filteredEmojis.hasOwnProperty(category)) {
            filteredEmojis[category] = [];
          }
          filteredEmojis[category] = [ ...filteredEmojis[category], emoji ];
        });
      }

      return filteredEmojis;
    },
    getCategoryRef (category) {
      return category.toLowerCase().split(' ').join('_');
    },
    categorizeEmojis () {
      let categorizedEmojis = {};
      let allEmojis = [...this.getFrequentUsedEmojis(), ...this.data];
      let {name: tone} = this.getDefaultSkinTon();

      allEmojis.forEach(emojiObj => {
        if (!categorizedEmojis.hasOwnProperty(emojiObj.category)) {
          categorizedEmojis[emojiObj.category] = [];
        }
        emojiObj.emoji = skinTone(emojiObj.emoji, skinTone[tone]);
        categorizedEmojis[emojiObj.category] = [...categorizedEmojis[emojiObj.category], emojiObj];
      });

      return categorizedEmojis;
    },
    getDefaultSkinTon () {
      let defaultSkinTon = localStorage.getItem(DEFUALT_SKIN_TON);
      return defaultSkinTon === null
        ? {name: 'NONE', emoji: '✋'}
        : JSON.parse(defaultSkinTon);
    },
    setDefaultSkinTon (skinTon) {
      this.showSkinTonPickers = !this.showSkinTonPickers;
      localStorage.setItem(DEFUALT_SKIN_TON, JSON.stringify(skinTon));
      this.resetInitEmojis(skinTon.name);
    },
    resetInitEmojis (tone) {
      for (let categroy in this.categorizedEmojis) {
        this.categorizedEmojis[categroy].forEach(emojiObj => {
          emojiObj.emoji = skinTone(emojiObj.emoji, skinTone[tone]);
        });
      }
    },
    getToneHands () {
      return skinToneNames.map(item => {
        return { ...item, ...{ emoji: skinTone('✋', skinTone[item.name]) } };
      }).sort(this.sortToneHands);
    },
    sortToneHands (a, b) {
      return a.name === this.getDefaultSkinTon().name ? 1 : 0;
    },
    handleMouseLeaveFooter () {
      if (this.showSkinTonPickers) {
        this.showSkinTonPickers = false;
      }

      if (this.hoveredEmoji !== null) {
        this.hoveredEmoji = null;
      }
    },
    handleMouseEnterEmoji (emoji) {
      if (this.showSkinTonPickers) {
        this.showSkinTonPickers = false;
      }
      this.hoveredEmoji = emoji;
    },
    handleMouseLeaveEmoji (emoji) {
      this.hoveredEmoji = null;
    },
    setupPopper () {
      if (this.popper === null) {
        this.popper = new Popper(this.emojiInvoker, this.emojiDropdown, { placement: 'bottom-end' });
        return;
      }
      this.popper.scheduleUpdate();
    }
  },
  mounted () {
    this.skinTonPickers = this.getToneHands();
    this.categorizedEmojis = this.categorizeEmojis();
    this.emojiDropdown = this.$refs.emojiDropdown;
    this.emojiInvoker = this.$refs.emojiInvoker;
    this.emojiInvokerIcon = this.$refs.emojiInvokerIcon;
    this.handleScroll();
  }
};
</script>

<style lang="scss" style="scope">
.emoji-picker {
  position: relative;
  .emoji-invoker {
    position: relative;
    text-align: right;
    .invoker-icon {
      font-size: 28px;
      .show {
        font-size: 20px;
      }
    }
  }
  .emoji-dropdown {
    width: 295px;
    margin: 10px 0px;
    border: 1px solid #dae1e7;
    border-radius: 5px;
    padding: 0 4px 0px 4px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header {
      border-bottom: 1px solid #dddd;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px 4px 5px 4px;
      display: flex;
      background: #f8fafc;
      justify-content: space-between;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      span {
        position: relative;
      }
    }
    .search {
      position: relative;
      width: 100%;
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px 5px 30px;
        margin-bottom: 10px;
        border: 1px solid #dae1e7;
        font-size: 14px;
        border-radius: 9999px;

        &:focus {
          outline: none;
        }
      }
      .search-icon {
        position: absolute;
        left: 8px;
        top: 5px;
      }
    }
    .emojis {
      display: flex;
      flex-direction: column;
      height: 180px;
      width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      position: relative;
      .category {
        text-transform: capitalize;
        padding: 6px;
        color: #3d4852;
        position: sticky;
        z-index: 2;
        top: 0;
        background: white;
      }
      &::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(201, 199, 199, 0.867);
        border-radius: 5px;
      }
      .emoji-list {
        display: flex;
        flex-wrap: wrap;
      }
      .emoji {
        padding: 3px;
        font-size: 1.5em;
      }
    }

    .result-info {
      font-size: 1rem;
      margin: auto;
      text-align: center;
      color: grey;
    }
  }
  .active {
    &:before {
      border-right: 2px solid green;
      content: "";
      display: block;
      height: 28px;
      font-size: 36px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .pointer {
    cursor: pointer;
  }

  svg {
    fill: currentColor;
    max-height: 18px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 4px;
    width: 100%;
    height: 2.5rem;
    border-top: 1px solid #ddd;
    background: #f9f9f9;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    .emoji-preview {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .emoji {
        font-size: 2rem;
        margin-right: 0.5rem;
      }

      .alias-container {
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          color: #3d4852;
        }

        .alias {
          color: grey;
        }
      }
    }

    .title {
      padding-left: 6px;
      color: grey;
    }

    .ton-picker {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 6px;
      .hands-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        .hands {
          font-size: 1.3rem;
          display: flex;
          .hand {
            cursor: pointer;
          }
        }
        .tip {
          font-size: 0.8rem;
          color: grey;
        }
      }
    }
  }
}
</style>
