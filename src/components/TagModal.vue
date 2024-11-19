  <script>
  import { warn } from 'vue';



  export default {
    props: {
      show: Boolean,
      addedTags: Array
    },

    data(){
      return{
        all_tags: [
          {cat_name:"Saúde", cat_id: 1},
          {cat_name: "Agricultura", cat_id: 2},
          {cat_name: "Ferramenta", cat_id: 3},
          {cat_name: "Música", cat_id: 4},
          {cat_name: "TI", cat_id: 5},
          {cat_name: "Marketing", cat_id: 6},
          {cat_name: "Mecânica", cat_id: 7}
        ]
      }
    },

    methods:{
      clickTag(tag){
        if (this.addedTags.length < 3){
          this.addedTags.push(tag)
        } else{
          alert("Máximo de tags atingido!")
        }
        
      }
      
    }

  }
  </script>


  <template>

    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="container">
          <h2>Selecione uma tag:</h2>
          
          <ul>
            <li 
            class="cat"
            v-for="tag in all_tags"
            @click="clickTag(tag)"
            v-if="">
              {{ tag.cat_name }}
            </li>
          </ul>

          <button @click="$emit('close')">Tenha um MAL dia.</button> 
        </div>
          
      </div>
    </Transition>

  </template>


  <style scoped>
  @import url(@/assets/css/categorias.css);

  ul{
    padding: 0px;
    margin: 2% 0 0 0;
  }

  li{
    cursor: pointer;
    margin: 0px 2% 2% 0;
  }

  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
  }

  .container {
    width: 25%;
    height: 50%;
    margin: auto;
    padding: 2%;
    background-color: var(--CardColor);
    color: var(--Text2);

    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
    transition: all 0.3s ease;
  }

  button{
    margin: auto;
  }


  /* Animações do Vue*/

  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  </style>