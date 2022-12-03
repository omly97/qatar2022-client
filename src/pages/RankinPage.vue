<template>
    <v-container>
        <template v-if="loading">
            <div class="d-flex flex-column">
                <v-skeleton-loader
                    v-for="i in 4"
                    :key="i"
                    type="image"
                    height="120"
                    class="mb-1"
                ></v-skeleton-loader>
            </div>
        </template>

        <template v-else>
            <v-row dense>
                <v-col
                    v-for="(item, i) in rankinData" :key="i"
                    cols="12" xl="3" lg="3" md="3"
                >
                    <RankinGroupTable :rankin="item"></RankinGroupTable>
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<script>
import RankinGroupTable from '@/components/RankinGroupTable.vue'
import useRankin from '@/api/rankin'
const { getRankinData } = useRankin()

export default {
    name: 'RankinPage',
    data: () => ({
        rankinData: [],
        loading: false
    }),
    components: { RankinGroupTable },
    created() {
        this.fetchRankinData()
    },
    methods: {
        fetchRankinData() {
            this.loading = true;
            getRankinData().then(response => {
                this.rankinData = response
            }).catch(error => {
                this.$swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                });
            }).finally(() => {
                this.loading = false
            })
        }
    }
}
</script>
