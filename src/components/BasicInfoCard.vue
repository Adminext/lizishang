<template>
    <a-row type="flex" justify="center" align="top">
        <a-col :span=11 class="info-list" >
            <a-card style="border:0"> 
                <h1 id="English-name"> Zishang Li </h1>
                <h1 id="Chinese-name"> 李 子尚</h1>
                <a-divider margin="10px"></a-divider>
                <div id="details">
                    <p id="school"> 
                        <school-icon :style="{ fontSize:'24px', color:'#333333'}" />
                        School of Mathematics and Statistics, 
                    </p>
                    <p id="university"> Northwestern Polytechnical University (NWPU) </p>
                    <p id="postal-address"> 
                        <postal-address-icon :style="{ fontSize:'24px'}" />
                        #1 Dongxiang Street, Xi’an, Shaanxi, China 710129 
                    </p>
                    <p id="phone-number"> 
                        <a-icon type="phone" :style="{fontSize:'24px', color:'#333333'}"/>
                        +86-15399079256 
                    </p>
                    <p id="email-1" class="email"> 
                        <a-icon type="mail" />
                        lizishang@mail.nwpu.edu.cn 
                    </p>
                    <p id="email-2" class="email"> li_zishang@163.com </p>
                </div>
            </a-card>
        </a-col>
        <a-col :span=11 class="personal-photo-col">
            <img :src="personalPhotoUrl" :alt="personalPhotoUrl" id="personal-photo"/>
        </a-col>
    </a-row>
</template>

<script>
const SchoolSvg = {
    template: `
        <svg t="1604462144408" class="icon" viewBox="0 0 1137 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5953" width="200" height="200"><path d="M1106.946962 411.114111a63.52684 63.52684 0 0 0 22.382514-22.382513 61.881067 61.881067 0 0 0-22.382514-84.592736L600.378014 8.228865a63.197686 63.197686 0 0 0-62.539377 0L32.915461 303.809707a61.551913 61.551913 0 0 0 0 107.304404l109.279332 63.52684v286.364513a25.015751 25.015751 0 0 0 11.191257 19.749277L557.258759 1020.379299a25.015751 25.015751 0 0 0 22.711669 0l404.860173-226.458373a25.015751 25.015751 0 0 0 11.520412-19.420122v-298.872389zM569.766635 78.338798l477.932497 279.781421-478.919961 278.793957-477.603343-280.110576z m344.295724 648.763741a24.357441 24.357441 0 0 1-11.520411 19.420123l-321.254902 179.718418a24.686596 24.686596 0 0 1-23.040823 0L234.02893 734.014786a26.332369 26.332369 0 0 1-11.191257-20.078431v-191.23883l315.000964 183.997428a62.210222 62.210222 0 0 0 31.269688 8.55802 60.893603 60.893603 0 0 0 30.940534-8.55802l313.684346-183.009964z" p-id="5954"></path><path d="M1061.85278 491.756991m13.166185 0l49.373192 0q13.166185 0 13.166184 13.166185l0 157.335905q0 13.166185-13.166184 13.166184l-49.373192 0q-13.166185 0-13.166185-13.166184l0-157.335905q0-13.166185 13.166185-13.166185Z" p-id="5955"></path></svg>
    `
}
const PostalAddressSvg = {
    template: `
        <svg t="1604461998543" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5057" width="200" height="200"><path d="M992 128H896v64h64v288h-160V448h-64v64a32 32 0 0 0 32 32h192v64H448a32 32 0 0 0-32 32v320h-64V480A32 32 0 0 0 320 448H64V384h160a32 32 0 0 0 32-32V192h96V128h-320a32 32 0 0 0-32 32v832a32 32 0 0 0 32 32h960a32 32 0 0 0 32-32v-832a32 32 0 0 0-32-32zM64 192h128v128H64V192z m224 768H64V512h224v448zM960 960H480v-288H960V960zM608 544a32 32 0 0 0 22.72-9.28C798.08 367.04 800 199.04 800 192a192 192 0 1 0-384 0c0 7.04 1.92 175.04 169.28 342.72A32 32 0 0 0 608 544z m0-480a128 128 0 0 1 128 128s-2.56 134.4-128 273.6C483.2 326.72 480 194.56 480 192a128 128 0 0 1 128-128z m0 192a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" p-id="5058"></path></svg>   
    `
}
const SchoolIcon = {
    template: `<a-icon :component="SchoolSvg" />`,
    data() {
        return {
            SchoolSvg,
        }
    }
}
const PostalAddressIcon = {
    template: `<a-icon :component="PostalAddressSvg" />`,
    data() {
        return {
            PostalAddressSvg,
        }
    }
}

export default {
    name: "basic-info-card",
    components: {
        SchoolIcon,
        PostalAddressIcon,
    },
    data() {
        return {
            personalPhotoUrl: require("@/assets/LiZishang.jpg")
        }
    }
}
</script>

<style scoped>
.info-list{
    text-align: left;
    margin-left: 10px;
}

#English-name{
    font-family: 'Times New Roman', Times, serif;
    font-size: 80px;
    margin-bottom: 0;
}

#Chinese-name{
    font-family: "宋体";
    font-weight: bolder;
    font-size: 60px;
    color: gray;
    margin-bottom: 0;
}

#details{
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    margin:2px;
}

#university{
    margin-left: 8ch;
}

#email-2{
    margin-left:28px;
}

p{
    margin:2px;
}

.personal-photo-col{
    align-content: left;
}

#personal-photo{
    vertical-align: right;
    margin: 1vh;
    width:40ch;
}
</style>