<template>
  <div class="home">
    <basic-info-card></basic-info-card>
    <a-divider />
    <detailed-info-tabs></detailed-info-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import BasicInfoCard from '@/components/BasicInfoCard.vue'
import DetailedInfoTabs from '@/components/DetailedInfoTabs.vue'

export default {
  name: 'Home',
  components: {
    BasicInfoCard,
    DetailedInfoTabs
  }
}
</script>
