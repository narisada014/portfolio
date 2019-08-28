<template>
  <div>
    <FirstBookRegister @increment-index="incrementIndex" v-if="indexRegister === 1" />
    <SecondBookRegister @increment-index="incrementIndex" v-if="indexRegister === 2" />
    <ThirdBookRegister @increment-index="incrementIndex" v-if="indexRegister === 3" />
    <FourthBookRegister v-if="indexRegister === 4" />
  </div>
</template>

<script>
  import FirstBookRegister from '../organizms/FirstBookRegister'
  import SecondBookRegister from '../organizms/SecondBookRegister'
  import ThirdBookRegister from '../organizms/ThirdBookRegister'
  import FourthBookRegister from '../organizms/FourthBookRegister'
  export default {
    components: {
      FirstBookRegister,
      SecondBookRegister,
      ThirdBookRegister,
      FourthBookRegister
    },
    data() {
      return {
        indexRegister: 1
      }
    },
    methods: {
      incrementIndex: function() {
        this.indexRegister += 1
        console.log(this.indexRegister)
      }
    }
  }
</script>
