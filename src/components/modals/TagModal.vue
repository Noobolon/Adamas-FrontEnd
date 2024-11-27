<script>
  import { all_tags } from '@/assets/scripts/search_scripts';

  export default {
    props: {
      show: Boolean,
      addedTags: Array
    },

    data(){
      return{
        all_tags: all_tags,
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
              :class="!this.addedTags.includes(tag) ? 'defaultCat' : 'selectedCat'"
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
@import url(@/assets/css/modal.css);

ul{
    padding: 0px;
    margin: 2% 0 0 0;
}

li{
    cursor: pointer;
    margin: 0px 2% 2% 0;
}

.selectedCat{
    color: var(--Text);
    background-color: var(--TagSelectedColor);
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