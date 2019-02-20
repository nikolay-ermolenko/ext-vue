export const layout = {
  computed: {
    isCardLayout() {
      return this.$props.layout === 'card';
    },
    isBoxLayout() {
      return (
        this.$props.layout === 'box' ||
        this.$props.layout === 'hbox' ||
        this.$props.layout === 'vbox'
      );
    },
    isHBoxLayout() {
      return this.$props.layout === 'hbox';
    },
    isVBoxLayout() {
      return this.$props.layout === 'vbox';
    },
    isCenterLayout() {
      return this.$props.layout === 'center';
    },
  },
};

export const ui = {
  computed: {
    hasUi() {
      return this.$props.ui !== null && typeof this.$props.ui !== 'undefined';
    },
    hasBadge() {
      return (
        this.$props.badgeText !== null &&
        typeof this.$props.badgeText !== 'undefined'
      );
    },
    hasText() {
      return (
        this.$props.text !== null && typeof this.$props.text !== 'undefined'
      );
    },
    hasIcon() {
      return (
        this.$props.iconCls !== null &&
        typeof this.$props.iconCls !== 'undefined'
      );
    },
  },
};
