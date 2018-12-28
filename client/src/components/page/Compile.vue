<template>
    <div class="container">
        <div class="compile-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="模块名">
                    <el-input v-model="form.module"></el-input>
                </el-form-item>
                <el-form-item label="版本号">
                    <el-input v-model="form.version"></el-input>
                </el-form-item>
                <el-form-item label="apk分支">
                    <el-col :span="11">
                        <el-input v-model="form.branch"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">mk文件</el-col>
                    <el-col :span="11">
                        <el-input v-model="form.mk"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="环境分支">
                    <el-input v-model="form.env_branch"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交编译</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Compile",
        data: function () {
            return {
                form: {
                    module: 'Amigo_Mms',
                    version: 'V8.0.0.k',
                    branch: 'master',
                    mk: 'Amigo_Mms_RA-V8.0.0.mk',
                    env_branch: 'branch_gradle_2.1.0_rel',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('start compile', JSON.stringify(this.form));
                this.$axios.post('http://localhost:3000/users/compile', this.form).then((res) => {
                    console.log("返回 - status：" + res.status + "; code:" + res.data.code);
                    if (res.status === 200 && res.data.code === 0) {
                        this.$message.success('编译成功！');
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .compile-box {
        width: 800px;
    }
</style>
