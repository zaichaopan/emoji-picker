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
                          @click="selectEmoji(item.emoji)">
                        {{ item.emoji }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popper from 'popper.js';
import {categories, searchSVG, emojiInvokerFaceSVG} from '../data/svg.js';
import emojis from '../data/emojis';
import frequentlyUsed from '../data/frequently-used';

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
      scrolledTo: 'frequently_used'
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
    selectEmoji (emoji) {
      this.$emit('emoji:picked', emoji);
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
      Object.keys(this.initEmojis).forEach(category => {
        filteredEmojis = {...filteredEmojis, ...{[category]: []}};
      });

      for (let category in this.initEmojis) {
        this.initEmojis[category].forEach(emoji => {
          if (~emoji.description.toLowerCase().indexOf(this.search.toLowerCase())) {
            filteredEmojis[category] = [ ...filteredEmojis[category], emoji ];
          }
        });
      }

      Object.keys(this.initEmojis).forEach(category => {
        if (filteredEmojis[category].length === 0) {
          delete filteredEmojis[category];
        }
      });

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
      let allEmojis = [...frequentlyUsed, ...emojis];
      let categories = allEmojis.map(item => item.category);
      categories = [...new Set(categories)];
      categories.forEach(category => {
        categorizedEmojis = {...categorizedEmojis, ...{[category]: []}};
      });

      allEmojis.forEach(emoji => {
        categorizedEmojis[emoji.category] = [...categorizedEmojis[emoji.category], emoji];
      });

      return categorizedEmojis;
    }
  },
  mounted () {
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
    padding: 0 10px 5px 12px;
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
      height: 200px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      margin-right: -7px;
      position: relative;
      .category {
        text-transform: capitalize;
        padding: 8px 0px;
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
}
</style>
