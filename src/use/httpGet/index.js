import { reactive, toRefs } from "vue"
import axios from "axios";
// const users = ref([]); // criando variavel com Proxies - transformando users em um array Proxies
// const loading = ref(true);
// const errors = ref(null);

export const useHttpGet = endpoint => {
    //https://free-nba.p.rapidapi.com/players
    // Reactive - Gera um objeto reativo e nele vc e obrigado a passar um objeto mesmo!
    // quando vc trabalha com reactive nao precisa passar o dado para um referencia do array como no refs `user.value`,
    // ou seja nao precisa do `value`
    const state = reactive({
        data: {},
        loading: true,
        error: null
    })

    axios
        .get(endpoint, {
            headers: {
                "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
                "X-RapidAPI-Key": "18ecbc1f59msh50007bfc07fd2c0p1af904jsnf270e69ea620"
            }
        })
        .then(res => {
            state.data = res.data;
        }).catch(e => state.error = e.response.data)
        .finally(() => (state.loading = false));

    // usando o toRefs so retorna o objeto reactive mesmo
    return toRefs(state)

}

