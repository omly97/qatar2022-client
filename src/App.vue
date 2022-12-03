<template>
    <div>
        <MobileLayout v-if="$vuetify.breakpoint.mobile"></MobileLayout>
        <WebLayout v-else></WebLayout>
    </div>
</template>

<script>
import WebLayout from '@/layouts/WebLayout.vue'
import MobileLayout from '@/layouts/MobileLayout.vue'

export default {
    name: 'App',
    data: () => ({
        // 
    }),
    components: {
        WebLayout,
        MobileLayout
    },
}
</script>
