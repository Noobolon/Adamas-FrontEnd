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
          if (!this.addedTags.includes(tag)){
            this.addedTags.push(tag)
          } else {
            alert("Tag já adicionada!") // Provavelmente os alerts serão trocados futuramente
          }
        } else{
          alert("Máximo de categorias atingido!")
        }
      }
      
    }

  }
  </script>


  <template>

    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="container">
          <div>
            <h2>Selecione até 3 categorias:</h2>
            <ul>
              <li 
              class="cat"
              v-for="tag in all_tags"
              @click="clickTag(tag)">
                {{ tag.cat_name }}
              </li>
           </ul>
          </div>
          <button @click="$emit('close')">Fechar</button> 
        </div>
          
      </div>
    </Transition>

  </template>


  <style scoped>
  @import url(@/assets/css/categorias.css);

  h2{
    margin-bottom: 4%;
  }

  ul{
    padding: 0px;
    margin: 2% 0 0 0;
  }

  li{
    cursor: pointer;
    margin: 0px 2% 2% 0;
  }

  button{
    background-color: var(--ButtonColor);
    border: 2px solid var(--ButtonColor);
    border-radius: 25px;

    width: 35%;
    padding: 1% 0;
    
    font-size: 1.5rem;
    color: var(--Text2);
    text-align: center;
  }

  button:hover{
    cursor: pointer;
    background-color: var(--ButtonHoverColor);
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    height: 35%;
    margin: auto;
    padding: 2%;
    background-color: var(--CardColor);
    color: var(--Text2);

    border: 2px solid var(--ButtonColor);
    border-radius: 25px;
    transition: all 0.3s ease;
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

  @media screen and (max-width: 600px){
    .container{
      padding: 3%;
      width: 100%;
      margin-left: 2%;
      margin-right: 2%;
    }
  }
  </style>