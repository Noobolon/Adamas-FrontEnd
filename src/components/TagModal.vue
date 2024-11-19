<script>
export default {
  props: {
    show: Boolean
  }
}
</script>


<template>

  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="container">
        <h2>Selecione uma tag:</h2>

        
        <button @click="$emit('close')">Compreensível, tenha um bom dia.</button> 
      </div>
        
    </div>
  </Transition>

</template>


<style scoped>

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
  width: 35%;
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