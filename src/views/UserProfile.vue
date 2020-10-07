<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"/>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem v-for="twoot in state.user.twoots" 
      :key="twoot.id" 
      :username="state.user.username" 
      :twoot="twoot" 
      @favourite="toggleFavourite"
    />
      <!-- <div class="user-profile__twoots" v-for="twoot in user.twoots" :key="twoot.id">
      </div> -->
    </div>
  </div>

</template>

<script>
import { computed, reactive } from 'vue';
import TwootItem from "../components/TwootItem";
import CreateTwootPanel from "../components/CreateTwootPanel";
import { useRoute } from 'vue-router';
import { users } from "../assets/users";

export default {
  name: 'UserProfile',
  components: { CreateTwootPanel, TwootItem },
  setup() {
    const route = useRoute();
    const userId = computed(()=>route.params.userId)

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    })

    const fullName = computed(()=>`${state.user.firstname} ${state.user.lastname}`)

    function addTwoot(twoot) {
      state.user.twoots.unshift({ id: state.user.twoots.length + 1, content: twoot});
    }

    return{
      state,
      addTwoot,
      fullName,
      userId
    }
    // function followUser() {
    //   state.followers++
    // }
  }

  // watch: {
  //   followers(newFollowerCount, oldFollowerCount){
  //     if (oldFollowerCount<newFollowerCount){
  //       console.log(`${this.user.username} has gaind a follower!`)
  //     }
  //   }
  // },

}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
  box-sizing: border-box;
  gap: 5em;
  .user-profile__sidebar {
    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        // margin-right: 50px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px ;
        border: solid 1px #DFE3E8;
        margin-bottom: 0;
        h1 {
          margin: 0;
        }
        .user-profile__admin-badge {
          background-color: rebeccapurple;
          color:#fff;
          border-radius: 5px;
          margin-right: auto;
          padding: 0px 10px;
          font-weight: bold;
        }
        
      }
  }

  .user-profile__twoots-wrapper {
    display: grid;
    gap: 10px;
    margin-bottom: auto;
  }  
}
</style>