<template>
<div>
    <div style="margin:2.5% 5% 0 5%;width:90%;box-shadow:10px 5px 5px;border:2px solid black;" v-for="i in 6" :key=i>
        <pdf ref="pdf" src='static/paper.pdf' :page="i"></pdf>
    </div>
</div>
</template>

<script>
import pdf from 'vue-pdf';
export default {
    name: "PdfView",
    components: {
        pdf,
    },
    data(){
        return{
            url: '',
            numPages:1,
        }
    },
    mounted: function() {
        this.getNumPages("static/paper.pdf")
    }, 
    methods: {
        getNumPages(url) {
            var loadingTask = pdf.createLoadingTask(url)
            loadingTask.then(pdfObj => {
                this.url = loadingTask
                this.numPages = pdfObj.numPages
            }).catch((err) => {
                console.error('pdf加载失败')
            })
        },
    }
}
</script>