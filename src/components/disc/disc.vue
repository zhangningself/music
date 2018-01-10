<template>
  <transition name="slide">
    <music-list :title="title" :bgImage="bgImage" :songs="SongList"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSongList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'

  export default {
    components: {
      MusicList
    },
    data() {
      return {
        SongList: []
      }
    },
    methods: {
      _getSongList() {
        if (!this.disc.dissid) {
          this.$router.push('/recommend')
          return
        }
        getSongList(this.disc.dissid).then((res) => {
          let data, i
          i = res.indexOf('(')
          data = JSON.parse(res.substring(i + 1, res.length - 1))
          if (data.subcode === ERR_OK) {
            this.SongList = this._normalizeSongs(data.cdlist[0].songlist)
            console.log(this.SongList)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    created() {
      this._getSongList()
    },
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
