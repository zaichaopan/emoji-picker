<template>
    <div class="emoji-picker">
        <div class="emoji-invoker"
             ref="emojiInvoker">
            <span class="invoker-icon"
                  ref="emojiInvokerIcon">
                <span v-if="show"
                      class="show"
                      v-html="emojiInvokerFaceSVG">
                </span>
                <span v-else>&#9786;</span>
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
                    <span v-for="(item, index) in items"
                          class="emoji pointer"
                          :key="index"
                          :title="item.aliases"
                          @click="selectEmoji(item)">
                        {{ item.emoji }}
                    </span>
                </div>
            </div>
            <div class="emoji-preview">
                <div class="default-preview">
                    <div>
                        Emoji Deluxe
                    </div>

                </div>

                <div class="skin-ton-picker">
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
</template>

<script>
import skinTone from 'skin-tone';
import Popper from 'popper.js';
import {categories, searchSVG, emojiInvokerFaceSVG} from '../data/svg.js';
import emojis from '../data/emojis';
import frequentlyUsed from '../data/frequently-used';

const skinToneNames = [
  {
    name: 'NONE'
  },
  {
    name: 'WHITE'
  },
  {
    name: 'CREAM_WHITE'
  },
  {
    name: 'LIGHT_BROWN'
  },
  {
    name: 'BROWN'
  },
  {
    name: 'DARK_BROWN'
  }
];

export default {
  data () {
    return {
      show: false,
      search: '',
      emojiInvokerIcon: null,
      emojiInvoker: null,
      emojiDropdown: null,
      selectedEmoji: null,
      searchSVG: searchSVG,
      initEmojis: {},
      emojiInvokerFaceSVG: emojiInvokerFaceSVG,
      categories: categories,
      scrolledTo: 'frequently_used',
      defaultSkinTon: null,
      skinTonPickers: [],
      showSkinTonPickers: false
    };
  },
  watch: {
    search () {
      if (this.search !== '') {
        this.scrolledTo = 'frequently_used';
      }
    },
    show () {
      if (!this.show) {
        this.search = '';
      }
    }
  },
  computed: {
    emojis () {
      return this.search ? this.filteredEmojis() : this.initEmojis;
    }
  },
  methods: {
    setFrequentUsedEmoji (emojiObj) {
      let key = 'Frequently Used';
      const maxLength = 9;
      let frequentUsedEmojis = this.getFrequentUsedEmojis().filter(item => item.description !== emojiObj.description);
      emojiObj.category = key;
      frequentUsedEmojis = [...frequentUsedEmojis, emojiObj];

      if (frequentUsedEmojis.length > maxLength) {
        frequentUsedEmojis.shift();
      }

      localStorage.setItem('frequently_used_emojis', JSON.stringify(frequentUsedEmojis));

      this.initEmojis[key] = frequentUsedEmojis;
    },
    getFrequentUsedEmojis () {
      let frequentUsedEmojis = localStorage.getItem('frequently_used_emojis');

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
      this.show = false;
    },
    scrollToCategory (category) {
      let [element] = this.$refs[category];
      element && element.scrollIntoView(true);
    },
    handleScroll () {
      let emojis = this.$refs.emojis;
      emojis.addEventListener('scroll', e => {
        if (!this.search) {
          Object.keys(this.categories).forEach(category => {
            let [element] = this.$refs[this.getCategoryRef(category)];
            if (element && emojis.scrollTop >= element.offsetTop) {
              this.scrolledTo = category;
            }
          });
        }
      });
    },
    filteredEmojis () {
      let filteredEmojis = {};
      for (let category in this.initEmojis) {
        this.initEmojis[category].forEach(emoji => {
          if (~emoji.description.toLowerCase().indexOf(this.search.toLowerCase())) {
            if (!filteredEmojis.hasOwnProperty(category)) {
              filteredEmojis[category] = [];
            }
            filteredEmojis[category] = [ ...filteredEmojis[category], emoji ];
          }
        });
      }

      return filteredEmojis;
    },
    handleClick () {
      window.addEventListener('click', e => {
        if (this.emojiInvokerIcon.contains(e.target)) {
          return (this.show = !this.show);
        }
        if (!this.emojiDropdown.contains(e.target)) {
          this.show = false;
        }
      });
    },
    getCategoryRef (category) {
      return category.toLowerCase().split(' ').join('_');
    },
    categorizeEmojis () {
      let categorizedEmojis = {};
      let allEmojis = [...this.getFrequentUsedEmojis(), ...emojis];
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
      let defaultSkinTon = localStorage.getItem('default_skin_ton');
      return defaultSkinTon === null
        ? {name: 'NONE', emoji: '✋'}
        : JSON.parse(defaultSkinTon);
    },
    setDefaultSkinTon (skinTon) {
      this.showSkinTonPickers = !this.showSkinTonPickers;
      localStorage.setItem('default_skin_ton', JSON.stringify(skinTon));
      this.resetInitEmojis(skinTon.name);
    },
    resetInitEmojis (tone) {
      for (let categroy in this.initEmojis) {
        this.initEmojis[categroy].forEach(emojiObj => {
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
    }
  },
  mounted () {
    this.skinTonPickers = this.getToneHands();
    this.initEmojis = this.categorizeEmojis();
    this.emojiDropdown = this.$refs.emojiDropdown;
    this.emojiInvoker = this.$refs.emojiInvoker;
    this.emojiInvokerIcon = this.$refs.emojiInvokerIcon;
    const popper = new Popper(this.emojiInvoker, this.emojiDropdown, {
      placement: 'bottom-start'
    });
    this.handleClick();
    this.handleScroll();
  }
};
</script>

<style lang="scss" scoped>
.emoji-picker {
  position: relative;
  width: 265px;
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
    width: 245px;
    border: 1px solid #dae1e7;
    border-radius: 5px;
    padding: 0 10px 0px 10px;
    background: white;
    .header {
      border-bottom: 1px solid #dddd;
      margin-left: -10px;
      margin-right: -10px;
      margin-bottom: 10px;
      padding: 10px 10px 0 10px;
      display: flex;
      background: #f8fafc;
      justify-content: space-between;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .search {
      position: relative;
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
      height: 180px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      margin-right: -7px;
      position: relative;
      .category {
        text-transform: capitalize;
        padding: 6px 0px;
        color: #3d4852;
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
      .emoji {
        padding: 2px;
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
    border-bottom: 2px solid green;
  }
  .pointer {
    cursor: pointer;
  }

  svg {
    fill: currentColor;
    max-height: 18px;
  }
  .emoji-preview {
    margin-left: -10px;
    margin-right: -10px;
    height: 3rem;
    border-top: 1px solid #ddd;
    background: #f9f9f9;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .emoji-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .skin-ton-picker {
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
</style>
