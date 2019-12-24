<template>
  <button :class="cnButton({ size }, [className])">
    <span v-if="icon" :class="cnButton('Icon', {size})">
      {{ icon }}
    </span>
    {{ msg }}
  </button>
</template>

<script>
import { cn } from "../utils/className";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    className: String,
    size: String,
    icon: String
  },
  methods: {
    cnButton: cn("button"),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scss" scoped>
.button {
  background-color: red;
  color: #fff;
  padding: 3px 6px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  outline: none;
  &__icon {
    &_size {
      &_xxxl {

      }
    }
  }
  &:hover {
    &__icon {

    }
  }
  &_size {
    &_xxxl {
    }
  }
}
.button:hover {
  background-color: rgba(255, 0, 0, 0.7);
}
</style>
