<template>
    <v-card outlined color="secondary" class="d-flex flex-column pa-2">
        <div class="white--text text-center text-caption">
            <span>{{ titleComputed }}</span>
        </div>

        <v-sheet class="d-flex justify-space-around align-center" width="100%" color="transparent">
           <!-- Home Team -->
            <div>
                <v-avatar size="50">
                    <v-img
                        :lazy-src="require('@/assets/img/qatar2022V.png')"
                        :src="data.HomeTeam.TeamPictureUrl"
                    ></v-img>
                </v-avatar>
                <div class="white--text text-center text-caption font-weight-bold">
                    {{ data.HomeTeam.TeamAbbreviation }}
                </div>
            </div>

            <!-- Match a venir -->
            <template v-if="isUpcomingGame">
                <div class="d-flex flex-column text-center text-caption white--text">
                    <span>VS</span>
                    <span>{{ data.Match.MatchDate | time }}</span>
                </div>
            </template>

            <!-- Match en cours -->
            <template v-if="isGameInProgess">
                <div class="d-flex justify-space-around white--text text-h4">
                    <span>{{ data.HomeTeam.Score }}</span>
                    <span class="mx-5">:</span>
                    <span>{{ data.AwayTeam.Score }}</span>
                </div>
            </template>

            <!-- Match termine -->
            <template v-if="isPlayedGame">
                <div class="d-flex justify-space-around white--text text-h4">
                    <span>{{ data.HomeTeam.Score }}</span>
                    <span class="mx-5">:</span>
                    <span>{{ data.AwayTeam.Score }}</span>
                </div>
            </template>

           <!-- Away Team -->
            <div>
                <v-avatar size="50">
                    <v-img
                        :lazy-src="require('@/assets/img/qatar2022V.png')"
                        :src="data.AwayTeam.TeamPictureUrl"
                    ></v-img>
                </v-avatar>
                <div class="white--text text-center text-caption font-weight-bold">
                    {{ data.AwayTeam.TeamAbbreviation }}
                </div>
            </div>
        </v-sheet>
    </v-card>
</template>

<script>
import useCalendar from '@/api/calendar'
const { getLiveMatch } = useCalendar()

export default {
    name: 'MatchCard',
    props: {
        match: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        data: {}
    }),
    computed: {
        titleComputed() {
            const suffx = this.data.GroupName != null ? ` - ${this.data.GroupName}` : ''
            return `Match ${this.data.Match.MatchNumber} ${suffx}`
        },
        isUpcomingGame() {
            return [1, 12].includes(this.data.Match.MatchStatus)
        },
        isGameInProgess() {
            return this.data.Match.MatchStatus == 3
        },
        isPlayedGame() {
            return this.data.Match.MatchStatus == 0
        }
    },
    created() {
        this.data = this.match
        if (! this.isPlayedGame) {
            setInterval(() => {
                getLiveMatch(this.data.Match.IdMatch).then(response => {
                    this.data = Object.assign(response, this.data)
                })
            }, 5000);
        }
    }
}
</script>
