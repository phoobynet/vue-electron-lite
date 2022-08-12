<script
  lang="ts"
  setup
>
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted, ref } from 'vue'
import { invokeMainHandler } from '@/lib/invokeMainHandler'

const message = ref<string>('')

onMounted(async () => {
  message.value = await invokeMainHandler<string>('hello')
  console.log(message.value)
})
</script>

<template>
<div class="flex container max-w-3xl mx-auto mt-20">
  <HelloWorld :msg="message ?? 'No Message'" />
</div>
</template>

<style
  lang="scss"
  scoped
>
</style>

