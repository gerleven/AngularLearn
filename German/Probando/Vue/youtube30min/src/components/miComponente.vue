<template>
<div>
    <h1>Mi componente:</h1>
    <h2>{{subtitulo}}</h2>
</div>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return{
            subtitulo: 'Soy el subtitulo del MiComponente'
        }
    }
}
</script>