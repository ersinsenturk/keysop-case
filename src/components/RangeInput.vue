<template>
  <div class="range-slider">
    <div class="flex justify-between">
      <input type="number" min="0" max="10" step="0.1" v-model="sliderMin" /> -
      <input type="number" min="0" max="10" step="0.1" v-model="sliderMax" />
    </div>
    <input type="range" min="0" max="10" step="0.1" v-model="sliderMin" />
    <input type="range" min="0" max="10" step="0.1" v-model="sliderMax" />
  </div>
  <button
    class="w-full text-white bg-primary hover:brightness-75 duration-100 font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
    @click="setRatingRange({ min: minAngle, max: maxAngle })"
  >
    Apply
  </button>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "@/stores";

const { setRatingRange } = useStore();

const minAngle = ref(0);
const maxAngle = ref(10);

const sliderMin = computed({
  get() {
    return parseFloat(minAngle.value);
  },
  set(newValue) {
    const val = parseFloat(newValue);
    if (val > maxAngle.value) {
      maxAngle.value = val;
    }
    minAngle.value = val;
  },
});

const sliderMax = computed({
  get() {
    return parseFloat(maxAngle.value);
  },
  set(newValue) {
    const val = parseFloat(newValue);
    if (val < minAngle.value) {
      minAngle.value = val;
    }
    maxAngle.value = val;
  },
});
</script>

<style scoped>
.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 4em;
}

.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 10px;
}

input[type="number"] {
  text-align: center;
  font-size: 1.2em;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 2px solid #ff6347;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #0a91b9;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #0a91b9;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #0a91b9;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #0a91b9;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #0a91b9;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>
