<script setup>
import AppTab from './components/AppTab.vue'
import TabConceitos from './components/TabConceitos.vue'
import TabStore from './components/TabStore.vue'
import TabTodoListComponentizada from './components/TabComponentizada.vue'
import { onMounted, ref } from 'vue'

const conceitos = ref(true)
const projeto = ref(false)
const armazenamento = ref(false)

const mostrarConceitos = () => {
	conceitos.value = true
	projeto.value = false
	armazenamento.value = false
}

const mostrarProjeto = () => {
	conceitos.value = false
	projeto.value = true
	armazenamento.value = false
}

const mostrarArmazenamento = () => {
	conceitos.value = false
	projeto.value = false
	armazenamento.value = true
}


onMounted(() => {
	conceitos.value = true
	projeto.value = false
	armazenamento.value = false
})
</script>
<template>
	<div class="p-32">
		<h1 class="text-gray-700 text-xl font-semibold">Aula 03 de agosto</h1>
		<div class="flex w-full bg-green-600/10">
			<app-tab @click="mostrarConceitos()" nome="Conceitos" :selecionada="conceitos === true" />
			<app-tab @click="mostrarProjeto()" nome="Primeiro Projeto" :selecionada="projeto === true" />
			<app-tab @click="mostrarArmazenamento()" nome="Pinia Store" :selecionada="armazenamento === true" />
		</div>

		<tab-conceitos v-if="conceitos" />
		<tab-todo-list-componentizada v-if="projeto" />
		<tab-store v-if="armazenamento" />
	</div>
</template>
