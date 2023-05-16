import { reactive } from 'vue'

export const store = reactive({
    personList: reactive([]),
    push(person) {
        this.personList.push(person);
    }
})