<template>
    <a-row type="flex" justify="center" align="top"> 
    <div style="height:1036px">
        <a-col span="20"> 
            <a-tabs default-active-key="1" tab-position="left">
                <a-tab-pane key="1">
                    <span slot="tab">
                        <a-icon type="book" class="small-icon"/>
                        Education
                        <a-divider class="small-divider"/>
                    </span>
                    <h1>EDUCATION</h1>
                    <div id="education-1">
                        <div class="item-head">
                            <span><h2>School of Mathematics and Statistics, Northwestern Polytechnical University (NWPU)</h2></span>
                            <span class="right-float-time">08/2017-Present</span>
                        </div>
                        <div class="item-body">
                            <p>Bachelor of Science Degree in <span style="font-style:italic">Information and Computing Science</span>, expected in June 2021.</p>
                            <p>Overall GPA: <span style="font-weight:bold">87.76/100</span>; Class Ranking:<span style="font-weight:bold">3/46</span>.</p>
                            <p>Selected Coursework: Mathematical Analysis <span style="font-weight:bold">97%</span>, 
                                                    Advanced Algebra<span style="font-weight:bold">88%</span>, 
                                                    Numerical Algebra<span style="font-weight:bold">98%</span>, 
                                                    Numerical Optimization Method<span style="font-weight:bold">93%</span>,
                                                    Machine Learning <span style="font-weight:bold">99%</span>, 
                                                    Partial Differential Equations<span style="font-weight:bold">94%</span>, 
                                                    C Language Programming <span style="font-weight:bold">91%</span>.</p>
                        </div>
                    </div>
                    <a-divider />
                    <div id="education-2">
                        <div class="item-head">
                            <span><h2>Data Science Institute, Imperial College London</h2></span>
                            <span class="right-float-time">07/2019-08/2019</span>
                        </div>
                        <div class="item-body">
                            <p>Coursework: Data Science, Big Data Management and Cloud Computing.</p>
                        </div>
                    </div>
                </a-tab-pane>

                <a-tab-pane key="2">
                    <span slot="tab">
                        <a-icon type="bar-chart" class="small-icon"/>
                        Research Experience
                        <a-divider class="small-divider"/>
                    </span>
                    <h1>REASEARCH EXPERIENCE</h1>
                    <div id="research-1">
                        <div class="item-head">
                            <span><h2>Study of the Information Dissemination on Social Network Based on Vector Matching Method</h2></span>
                            <span class="right-float-time">05/2018-04/2019</span>
                            <span><h3 style="font-style:italic">National Undergraduate Training Program for Innovation; Advisor: Prof. Hao Sun</h3></span>
                        </div>
                        <div class="item-body">
                            <p>Analyzed the mechanism of social network based on the crawled Sina Weibo and WeChat user data, filtered the information and extracted keywords.</p>
                            <p>Improved the extraction of feature information and proposed a vector matching model between eigenvector space and nodes; built the information dissemination model.</p>
                            <p>Realized the accuracy in content on social media, which would provide reference for personalized advertisements and user privacy protection.</p>
                        </div>
                    </div>
                    <a-divider />
                    <div id="research-2">
                        <div class="item-head">
                            <span><h2>Image Classification Based on Multi-Model Fusion of Convolution Neural Network (CNN)</h2></span>
                            <span class="right-float-time">09/2019-12/2019</span>
                            <span><h3 style="font-style:italic">NWPU Gaofeng Undergraduate Research Training Program; Advisor: Prof. Yong Xia</h3></span>
                        </div>
                        <div class="item-body">
                            <p>Selected and downloaded the Cats vs.Dogs data set on Kaggle and preprocessed it before training.</p>
                            <p>Applied transfer learning method to train CNN models (Resnet, Inception, Xception).</p>
                            <p>Adopted voting and mean square error as the losing function to fuse the aforementioned CNN models to improve the recognition accuracy.</p>
                            <p>Demonstrated with experiment results that the proposed multi-model fusion method has higher accuracy (increased by 0.02%) and stronger generalization ability than single CNN model.</p>
                        </div>
                    </div>
                    <a-divider />
                    <div id="research-3">
                        <div class="item-head">
                            <span><h2>Seminars on Computational Mathematics and Computational Mechanics</h2></span>
                            <span class="right-float-time">05/2019-03/2020</span>
                            <span><h3 style="font-style:italic">Paper on ISOPE 2020 (International Society of Offshore and Polar Engineers); Advisor: Prof. Zihao Yang</h3></span>
                        </div>
                        <div class="item-body">
                            <p>Learned and mastered the knowledge of finite element method, elastic mechanics, and submerged floating tunnel.</p>
                            <p>Conducted independent study of the latest works/papers regarding material, geotechnical and biomedical problems.</p>
                        </div>
                    </div>
                    <a-divider />
                    <h1>PUBLICATION</h1>
                    <div id="publication">
                        <p>
                            <span>Duan Wei-guo, Li Zi-shang, Zhang Jie-qiong, Yang Zi-hao, Lin Wei. </span> 
                            <span style="font-style:italic">Study on Mathematical Model and Exact Solution of Overall Structural Response and Natural Frequency of Submerged Floating Tunnel. </span>
                            <span>International Society of Offshore and Polar Engineers (ISOPE), 2020.</span>
                            <img src="../assets/icon_pdf.gif" @click="viewPDF"/>
                        </p>
                    </div>
                </a-tab-pane>

                <a-tab-pane key="3">
                    <span slot="tab">
                        <prize-icon class="small-icon"/>
                        Scholarship &amp; Awards
                        <a-divider class="small-divider"/>
                    </span>
                    <h1>SCHOLARSHIP &amp; AWARDS</h1>
                    <a-list item-layout="horizontal" :data-source="scholarshipList">
                        <a-list-item slot="renderItem" slot-scope="item, index" style="padding:4px">
                            <div style="flex">
                                <span class="scholarship-title">{{item.title}}</span>
                                <span class="scholarship-detail">{{item.detail}}</span>
                                <span class="scholarship-special">{{item.special}}</span>
                                <span class="scholarship-date">{{item.date}}</span>
                            </div>
                        </a-list-item>
                    </a-list>
                </a-tab-pane>
                <a-tab-pane key="4">
                    <span slot="tab">
                        <a-icon type="team" class="small-icon"/>
                        Leadership &amp; Involvements
                        <a-divider class="small-divider"/>
                    </span>
                    <h1>LEADERSHIP &amp; INVOLVEMENTS</h1>
                    <div id="leadership-1">
                        <div class="item-head">
                            <span><h2>President of Northwestern Polytechnical University English Association</h2></span>
                        </div>
                        <div class="item-body">
                            <p>Organized 30+ English Corner events, resulting in 30% increase in membership; upgraded and enhanced the online platform of the association.</p>
                        </div>
                    </div>
                    <div id="leadership-2">
                        <div class="item-head">
                            <span><h2>Student Tutor of Learning Counseling Center of Northwestern Polytechnical University</h2></span>
                        </div>
                        <div class="item-body">
                            <p>Tutored students to prepare for make-up examinations; conducted Q&amp;A sessions; guided learning methods for juniors.</p>
                        </div>
                    </div>
                    <div id="leadership-3">
                        <div class="item-head">
                            <span><h2>Volunteer Services</h2></span>
                        </div>
                        <div class="item-body">
                            <p>Worked as the volunteer in Datang Xishi Museum, “The Belt and Road” 2018 Yanta International Fencing Cup, etc.</p>
                        </div>
                    </div>
                </a-tab-pane>
                <a-tab-pane key="5">
                    <span slot="tab">
                        <a-icon type="tool" class="small-icon"/>
                        Skills &amp; Hobbies
                        <a-divider class="small-divider"/>
                    </span>
                    <h1>SKILLS &amp; HOBBIES</h1>
                    <div id="skill-1">
                        <div class="item-head">
                            <span><h2>Programming</h2></span>
                        </div>
                        <div class="item-body">
                            <p> C, MATLAB, Python, LaTeX.</p>
                        </div>
                    </div>
                    <div id="skill-2">
                        <div class="item-head">
                            <span><h2>Language</h2></span>
                        </div>
                        <div class="item-body">
                            <p>Native Speaker of Mandarin Chinese, Fluent in English.</p>
                        </div>
                    </div>
                </a-tab-pane>
            </a-tabs>
        </a-col>
    </div>
    </a-row>
</template>
<script>
const PrizeSvg = {
    template: `
        <svg t="1604463660591" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6805" width="200" height="200"><path d="M528.2 705.8h-32.4c-61.7 0-119.9-21.8-164-61.4-44.9-40.3-69.6-93.9-69.6-150.9V116.9c0-13.8 11.2-25 25-25s25 11.2 25 25v376.6c0 89.5 82.4 162.4 183.6 162.4h32.4c101.2 0 183.6-72.8 183.6-162.4V150.8c0-19.7-19.1-35.8-42.7-35.8H439.9c-13.8 0-25-11.2-25-25s11.2-25 25-25h229.2c51.1 0 92.7 38.5 92.7 85.8v342.7c0 57-24.7 110.6-69.6 150.9-44.1 39.6-102.4 61.4-164 61.4z" p-id="6806"></path><path d="M512 953.2c-13.8 0-25-11.2-25-25V683.8c0-13.8 11.2-25 25-25s25 11.2 25 25v244.5c0 13.7-11.2 24.9-25 24.9z" p-id="6807"></path><path d="M660.6 958H363.4c-13.8 0-25-11.2-25-25s11.2-25 25-25h297.2c13.8 0 25 11.2 25 25s-11.2 25-25 25zM756.3 457c-13.8 0-25-11.2-25-25s11.2-25 25-25c52.2 0 94.7-37 94.7-82.5S808.5 242 756.3 242c-13.8 0-25-11.2-25-25s11.2-25 25-25c79.8 0 144.7 59.4 144.7 132.5S836.1 457 756.3 457zM267.7 457C187.9 457 123 397.6 123 324.5S187.9 192 267.7 192c13.8 0 25 11.2 25 25s-11.2 25-25 25c-52.2 0-94.7 37-94.7 82.5s42.5 82.5 94.7 82.5c13.8 0 25 11.2 25 25s-11.2 25-25 25z" p-id="6808"></path></svg>
    `,
}
const PrizeIcon = {
    template: `
        <a-icon :component="PrizeSvg" />
    `,
    data() {
        return {
            PrizeSvg,
        }
    }
}

const scholarshipList = [
    {title:"Wu Yajun Scholarship",detail:"of Northwestern Polytechnical University",special:"(Top 2.8%)",date:"2018 & 2019"},
    {title:"First-class Scholarship",detail:"of Northwestern Polytechnical University",special:"",date:"2018 & 2019 & 2020"},
    {title:"Outstanding Student Award",detail:"of Northwestern Polytechnical University",special:"",date:"2018 & 2019 & 2020"},
    {title:"Honorable Mention",detail:"in Mathematical Contest in Modeling",special:"",date:"2020"},
    {title:"First Prize",detail:"in China Undergraduate Mathematical Contest in Modeling (Shaanxi Province)",special:"",date:"2018 & 2019"},
    {title:"Second Prize",detail:"in 2019 Certificate Authority Cup International Mathematical Contest in Modeling (Shaanxi Province)",special:"",date:"2019"},
    {title:"Third Prize",detail:"of 2019 International Contest of Innovation (iCAN) (Northwest Area)",special:"",date:"2019"}
]

export default {
    name: "detailed-info-tabs",
    components: {
        PrizeIcon,
    },
    data() {
        return{
            scholarshipList,
        }
    },
    methods: {
        viewPDF() {
            this.$router.push("/pdf");
        }
    }
}
</script>

<style scoped>
span{
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 15px;

    text-align: left;
}

p{
    text-align: left;
}

.small-icon{
    font-size: 15px;
    float: left;
}

.small-divider{
    margin: 1px;
}

.right-float-time{
    float: right;
}

.scholarship-title{
    font-size:20px;
    font-weight:bold;
}
.scholarship-detail{
    color:gray;
}
.scholarship-special{
    font-size:18px;
    font-weight:bold;
}
.scholarship-date{
    font-size:18px;
}

.h2-like{
    font-size:24px;
    text-align: left;
}
</style>