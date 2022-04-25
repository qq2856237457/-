<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>绩效审批</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    
                    <el-form-item label="考核类型">
                        <el-select v-model="form.region" placeholder="考核类型">
                            <el-option key="bbk" label="项目完成情况" value="bbk"></el-option>
                            <el-option key="xtc" label="工作能力情况" value="xtc"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="内容">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="得分">
                        <el-select v-model="form.counter" placeholder="得分">
                            <el-option key="0" label="0" value="0"></el-option>
                            <el-option key="1" label="1" value="1"></el-option>
                            <el-option key="2" label="2" value="2"></el-option>
                            <el-option key="3" label="3" value="3"></el-option>
                            <el-option key="4" label="4" value="4"></el-option>
                            <el-option key="5" label="5" value="5"></el-option>
                            <el-option key="6" label="6" value="6"></el-option>
                            <el-option key="7" label="7" value="7"></el-option>
                            <el-option key="8" label="8" value="8"></el-option>
                            <el-option key="9" label="9" value="9"></el-option>
                            <el-option key="10" label="10" value="10"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="审批人">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="领导审批">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="添加附件">
                        <el-upload
                            class="upload-demo"
                            drag
                            action="http://jsonplaceholder.typicode.com/api/posts/"
                            multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                         </el-upload>
                    </el-form-item>

                    
                    <!-- <el-form-item label="多选框">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="步步高" name="type"></el-checkbox>
                            <el-checkbox label="小天才" name="type"></el-checkbox>
                            <el-checkbox label="imoo" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="单选框">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="步步高"></el-radio>
                            <el-radio label="小天才"></el-radio>
                            <el-radio label="imoo"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="文本框">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            options: [
                {
                    value: 'guangdong',
                    label: '组长',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '经理',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '总经理'
                                },
                                {
                                    value: 'haizhu',
                                    label: '副总经理'
                                }
                            ]
                        },
                    ]
                },
                {
                    value: 'hunan',
                    label: '组长',
                    children: [
                        {
                            value: 'changsha',
                            label: '经理',
                        }
                    ]
                }
            ],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                date3: '',
                date4: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            }
        };
    },
    methods: {
        onSubmit() {
            this.$message.success('提交成功！');
        }
    }
};
</script>