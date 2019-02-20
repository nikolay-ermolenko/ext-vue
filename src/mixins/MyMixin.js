export const layout = {
  computed: {
    isCardLayout: function() {
      return this.$props.layout === "card";
    },
    isBoxLayout: function() {
      return (
        this.$props.layout === "box" ||
        this.$props.layout === "hbox" ||
        this.$props.layout === "vbox"
      );
    },
    isHBoxLayout: function() {
      return this.$props.layout === "hbox";
    },
    isVBoxLayout: function() {
      return this.$props.layout === "vbox";
    },
    isCenterLayout: function() {
      return this.$props.layout === "center";
    }
  }
};

export const ui = {
  computed: {
    hasUi: function() {
      return this.$props.ui !== null && typeof this.$props.ui !== "undefined";
    },
    hasBadge: function() {
      return (
        this.$props.badgeText !== null &&
        typeof this.$props.badgeText !== "undefined"
      );
    },
    hasText: function() {
      return (
        this.$props.text !== null && typeof this.$props.text !== "undefined"
      );
    },
    hasIcon: function() {
      return (
        this.$props.iconCls !== null &&
        typeof this.$props.iconCls !== "undefined"
      );
    }
  }
};
