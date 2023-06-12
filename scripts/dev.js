const minimist = require('minimist')
const {build} = require('esbuild') 
const path = require('path')
const args = minimist(process.argv.slice(2))


// 要对哪个子项目进行打包
const target = args._[0] ||'reactivity'
// 指定打包之后的格式
 const f = args.f || 'global'

 build({
  entryPoints:[path.resolve(__dirname,`../packages/${target}/src/index.ts`)],
  outfile:path.resolve(__dirname,`../packages/${target}/dist/${target}.${f}.js`),
  bundle:true,
  sourcemap:true,
  format:f.startsWith('global') ? 'iife' : f === 'cjs' ? 'cjs' : 'esm',
  globalName:require(path.resolve(__dirname,`../packages/${target}/package.json`)).buildOptions?.name ,
  platform:f === 'cjs' ? 'node' : 'browser',
  // watch:{
  //   onRebuild (error){
  //     if(!error){
  //       console.log("重新构建成功");
  //     }
  //   }
  // }
 }).then(()=>{
  console.log("初始编译成功，监听中");
 })