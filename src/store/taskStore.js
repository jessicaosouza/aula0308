import { defineStore } from "pinia"

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tarefas: []
    }),

    getters: {
        getTarefas: state => {
            return state.tarefas
        }
    },

    actions: {
        addTarefa(nome, prioridade){
            console.log("teste: ", nome)
            this.tarefas.push({
                id: this.tarefas.length + 1,
                nome: nome,
                proridade: prioridade,
                feita: false
            })
        },

        excluirTarefa(tarefa){
            this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id)
        }
    }
})