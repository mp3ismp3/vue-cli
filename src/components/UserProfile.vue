<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">
          Admin
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"/>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem v-for="twoot in user.twoots" 
      :key="twoot.id" 
      :username="user.username" 
      :twoot="twoot" 
      @favourite="toggleFavourite"
    />
      <!-- <div class="user-profile__twoots" v-for="twoot in user.twoots" :key="twoot.id">
      </div> -->
    </div>
  </div>

</template>

<script>
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";

export default {
  name: 'UserProfile',
  components: { CreateTwootPanel, TwootItem },
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes:[
        { value: 'draft', name: 'Draft'},
        { value: 'instant', name: 'Instant Twoot'}
      ],
      followers: 0,
      user: {
        id: 1,
        username: '_YenPingCheng',
        firstname: 'YenPing',
        lastname: 'Cheng',
        email: 'peter2mary@gmail.com',
        isAdmin: true,
        twoots: [
          { id: 1, content: "Twotter is Amazing" },
          { id: 2, content: "Don't forget to subscriber to me"}
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount){
      if (oldFollowerCount<newFollowerCount){
        console.log(`${this.user.username} has gaind a follower!`)
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
    newTwootCharacterCount() {
      return this.newTwootContent.length;
    }
  },
  methods: {
    addTwoot(twoot) {
      this.user.twoots.unshift({ id: this.user.twoots.length + 1, content: twoot});
    },
    followUser() {
      this.followers++
    },
    toggleFavourite(id) {
      console.log(`Favouriteed Twoot #${id}`)
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent='';
      }
    }
  },
  mounted() {
    this.followUser()
  }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        // margin-right: 50px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px ;
        border: solid 1px #DFE3E8;
        margin-bottom: auto;
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