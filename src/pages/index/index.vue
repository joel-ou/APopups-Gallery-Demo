<template>
    <div>
        <div class="top">
            <div class="log">
                APopups-Gallery
            </div>
            <p>Current version: 1.0.0 beta</p>
            <!-- <div class="menu">
                <a>Doc</a> | <a>Github</a> | <a>Feedback</a>
            </div> -->
        </div>
        <div class="content">
            <div class="image-list">
                <img src="@/imgs/thumbnail-1.jpg" @click="showGallery(0)">
                <p>tap this picture</p>
            </div>
            <gallery :mediaDatas='galleryDatas' :index="0" :show="isShow" @onClose="isShow=false"></gallery>
        </div>
        <div class="doc">
            <div class="warning">
                <h2>Before starting</h2>
                Before using, you need to know about <span style="color:red;">vuejs</span> and <span style="color:red;">vue's single-file component</span> development
            </div>
            <div class="getting-started">
                <h2>Getting started</h2>
                <h4>Step1: install by npm</h4>
                <p>
                    <pre><code>npm install popups-gallery-vue</code></pre>
                </p>
                <h4>Step2: import gallery vue component</h4>
                <p>
                    <pre><code>import gallery from "popups-gallery";<br/></code></pre>
                </p>
                <h4>Step3: Add to vuejs components</h4>
                <p>
                    <pre><code>components: { gallery }<br/></code></pre>
                </p>
                <h4>Step4: useing gallery component on your vue page</h4>
                <p>
                    <pre><code>&#60;gallery :imageDatas="imageDatas" :index="0" :show="isShow" @onClose="isShow=false">&#60;/gallery></code></pre>
                </p>
                <h4>Parameter:</h4>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>imageDatas</td>
                            <td>array</td>
                            <td>true</td>
                            <td>The images you want to show</td>
                        </tr>
                        <tr>
                            <td>index</td>
                            <td>number</td>
                            <td>false</td>
                            <td>The index of the images shown starts at 0. <span style="color:red;">defualt: 0</span></td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Display and close flags</td>
                        </tr>
                        <tr>
                            <td>onClose</td>
                            <td>function</td>
                            <td>true</td>
                            <td>You must change the show value to false inside the function</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="bootom">
            License: MIT <a style="margin-left: 2rem;">Github</a> <a href="mailto:8019893@qq.com" style="margin-left: 2rem;">8019893@qq.com</a>
        </div>
    </div>
</template>
<script>
import gallery from "apopups-gallery";

export default {
    name: "App",
    components: {
        gallery
    },
    data () {
        return {
            imageData: [[
                require(`@/imgs/animal-3.jpg`),
                require(`@/imgs/animal-1.jpg`),
                require(`@/imgs/animal-2.jpg`),
                require(`@/imgs/person-2.jpg`),
                require(`@/imgs/person-1.jpg`),
                require(`@/imgs/1.jpg`),
                require(`@/imgs/2.jpg`),
                require(`@/imgs/3.jpg`),
                require(`@/imgs/4.jpg`)
            ],[
            ]],
            galleryDatas: [],
            isShow: false
        }
    },
    methods: {
        showGallery(index){
            this.galleryDatas = this.imageData[index];
            this.isShow = true;
        }
    },
    computed: {
    }
}
</script>
<style lang="scss">
    @import 'common.scss';
    .top {
        width: 85%;
        margin:2rem auto;
        .log {
            font-weight: bold;
            font-size: 2rem;
        }
        p {
            color: rgb(221, 60, 60);
            padding: 1rem 0;
        }
    }
    .content {
        margin-top: 1rem;
        .image-list{
            margin: auto;
            border-bottom: 0.1rem solid #c5c5c50a;
            margin-top: 2rem;
            text-align: center;
            .image-div {
                margin: 1rem 0;
                max-height: 20rem;
                overflow: hidden;
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
    }
    .doc {
        max-width: 1200px;
        background-color: white;
        padding: 1rem 1rem;
        margin: auto;
        pre {
            background-color: rgb(228, 228, 228);
            overflow: auto;
            padding: 1rem;
        }
        table {
            td {
                padding: 0.5rem 1rem;
                &:nth-of-type(1) {
                    font-weight: bold;
                }
            }
        }
    }
    .bootom {
        padding: 2rem;
        text-align: center;
    }
</style>