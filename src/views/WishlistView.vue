<script>
import MoviesList from '../components/MoviesList.vue'

export default {
    inject: ['myGlobalVariable'],
    data() {
        return {

        }
    },
    components: {
        MoviesList
    }
}
</script>