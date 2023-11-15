"use strict";(self.webpackChunkdora_rs_github_io=self.webpackChunkdora_rs_github_io||[]).push([[2282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={authors:"haixuan",title:"Rust-Python FFI",description:"Rust-Python FFI."},i=void 0,l={permalink:"/blog/rust-python",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/rust-python.md",source:"@site/blog/rust-python.md",title:"Rust-Python FFI",description:"Rust-Python FFI.",date:"2023-11-15T10:55:49.000Z",formattedDate:"November 15, 2023",tags:[],readingTime:10.8,hasTruncateMarker:!1,authors:[{name:"Haixuan Xavier Tao",title:"Maintainer of dora-rs",url:"https://github.com/haixuantao",imageURL:"https://github.com/haixuantao.png",key:"haixuan"}],frontMatter:{authors:"haixuan",title:"Rust-Python FFI",description:"Rust-Python FFI."}},s={authorsImageUrls:[void 0]},p=[{value:"Foreign Function Interface",id:"foreign-function-interface",level:2},{value:"Interfacing Arrays",id:"interfacing-arrays",level:2},{value:"Implementation 1: Default",id:"implementation-1-default",level:3},{value:"&gt; Calling <code>create_list</code> for a very large list like: <code>value = [1] * 100_000_000</code>  is going to return in <strong>2.27s</strong> \ud83d\ude9c",id:"-calling-create_list-for-a-very-large-list-like-value--1--100_000_000--is-going-to-return-in-227s-",level:4},{value:"Implementation 2: PyBytes",id:"implementation-2-pybytes",level:3},{value:"&gt; For the same list input, <code>create_list_bytes</code> returns in <strong>78 milliseconds</strong>. That&#39;s <strong>30x</strong> better \ud83d\udc0e",id:"-for-the-same-list-input-create_list_bytes-returns-in-78-milliseconds-thats-30x-better-",level:4},{value:"Implementation 3: Apache Arrow",id:"implementation-3-apache-arrow",level:3},{value:"&gt; Same list returns in <strong>33 milliseconds</strong> . That&#39;s <strong>2x</strong> better than <code>PyBytes</code> \ud83d\udc0e\ud83d\udc0e",id:"-same-list-returns-in-33-milliseconds--thats-2x-better-than-pybytes-",level:4},{value:"Debugging",id:"debugging",level:2},{value:"<code>.unwrap()</code>",id:"unwrap",level:3},{value:"&gt; Example error:",id:"-example-error",level:4},{value:"eyre",id:"eyre",level:3},{value:"&gt; Same error as above but with <code>eyre</code> which gives a better looking error message:",id:"-same-error-as-above-but-with-eyre-which-gives-a-better-looking-error-message",level:4},{value:"Python traceback with <code>eyre</code>",id:"python-traceback-with-eyre",level:3},{value:"&gt; Example error with no custom traceback:",id:"-example-error-with-no-custom-traceback",level:4},{value:"&gt; Better errors with custom traceback:",id:"-better-errors-with-custom-traceback",level:4},{value:"Memory management",id:"memory-management",level:2},{value:"&gt; Calling this function will consume 440MB of memory. \ud83d\udc4e",id:"-calling-this-function-will-consume-440mb-of-memory-",level:4},{value:"&gt; Calling this function will consume 80MB of memory. \ud83d\udc4d",id:"-calling-this-function-will-consume-80mb-of-memory-",level:4},{value:"Race condition",id:"race-condition",level:2},{value:"&gt; This threaded print was printed after 10.0s. \ud83d\ude22",id:"-this-threaded-print-was-printed-after-100s-",level:4},{value:"&gt; &quot;1&quot; was printed after 32\xb5s and &quot;2&quot; was printed after 80\xb5s, so there was no race condition. \ud83d\ude04",id:"-1-was-printed-after-32\xb5s-and-2-was-printed-after-80\xb5s-so-there-was-no-race-condition-",level:4},{value:"Tracing",id:"tracing",level:2}],u={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Writing a rust library that is usable in multiple languages is not easy..."),(0,r.kt)("p",null,"This blogpost recollects things I have encountered while building ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webonnx/wonnx"},"wonnx")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dora-rs/dora"},"dora-rs"),". I am going to use Rust-Python FFI through ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3")," as an example. You can then extrapolate those issues to other languages FFI."),(0,r.kt)("h2",{id:"foreign-function-interface"},"Foreign Function Interface"),(0,r.kt)("p",null,"A foreign function interface (FFI) is an interface used to share data from different languages. "),(0,r.kt)("p",null,"By default, python might not know what a Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"u16")," is, so an interface is needed to make the two languages communicate."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/S1qiK8hRh.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Image from ",(0,r.kt)("a",{parentName:"p",href:"https://hacks.mozilla.org/2019/08/webassembly-interface-types/"},"WebAssembly Interface Types: Interoperate with All the Things!"))),(0,r.kt)("p",null,"Building interfaces is not easy. Most of the time, we have to use the C-ABI to build our FFI as it is the common denominator between languages."),(0,r.kt)("p",null,"Thankfully, there are FFI libraries that create interfaces for us and we can just focus on the important stuff such as the logic, algorithm, and so on."),(0,r.kt)("p",null,"However, those FFI libraries might have limitations. This is what we're going to discuss."),(0,r.kt)("p",null,"One example of such FFI library is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PyO3/pyo3"},(0,r.kt)("inlineCode",{parentName:"a"},"pyo3")),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PyO3/pyo3"},(0,r.kt)("inlineCode",{parentName:"a"},"pyo3"))," is one of the most used Rust-Python binding and creates FFIs for you. All we have to do is wrap our function with a ",(0,r.kt)("inlineCode",{parentName:"p"},"#[pyfunction]")," and that will make it usable in Python."),(0,r.kt)("h2",{id:"interfacing-arrays"},"Interfacing Arrays"),(0,r.kt)("p",null,"In this blog post, I'm going to build a toy Rust-Python project with ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3")," to illustrate the issues I have faced."),(0,r.kt)("p",null,"You can try this blogpost at home by forking the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/haixuanTao/blogpost_ffi"},"blogpost repository"),"."),(0,r.kt)("p",null,"If you want to start from scratch, you can create a new project with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir blogpost_ffi\nmaturin init # pyo3\n")),(0,r.kt)("p",null,"The default project will looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use pyo3::prelude::*;\n\n/// Formats the sum of two numbers as string.\n#[pyfunction]\nfn sum_as_string(a: usize, b: usize) -> PyResult<String> {\n    Ok((a + b).to_string())\n}\n\n/// A Python module implemented in Rust. The name of this function must match\n/// the `lib.name` setting in the `Cargo.toml`, else Python will not be able to\n/// import the module.\n#[pymodule]\nfn string_sum(_py: Python<'_>, m: &PyModule) -> PyResult<()> {\n    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;\n    Ok(())\n}\n")),(0,r.kt)("p",null,"We can call the function as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'maturin develop\npython -c "import blogpost_ffi; print(blogpost_ffi.sum_as_string(1,1))"\n# Return: "2" \n')),(0,r.kt)("p",null,"In the above example, ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3")," is going to create FFIs to make Python integer interpretable as a Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"usize")," without additional work. "),(0,r.kt)("p",null,"However, automatically interpreted types might not be the most optimized implementation."),(0,r.kt)("h3",{id:"implementation-1-default"},"Implementation 1: Default"),(0,r.kt)("p",null,"Let's imagine that, we want to play with arrays, we want to receive an array input and return an array output between Rust and Python.\nA default inplementation, would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[pyfunction]\nfn create_list(a: Vec<&PyAny>) -> PyResult<Vec<&PyAny>> {\n    Ok(a)\n}\n\n#[pymodule]\nfn blogpost_ffi(_py: Python, m: &PyModule) -> PyResult<()> {\n    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;\n    m.add_function(wrap_pyfunction!(create_list, m)?)?;\n    Ok(())\n}\n\n")),(0,r.kt)("h4",{id:"-calling-create_list-for-a-very-large-list-like-value--1--100_000_000--is-going-to-return-in-227s-"},"> Calling ",(0,r.kt)("inlineCode",{parentName:"h4"},"create_list")," for a very large list like: ",(0,r.kt)("inlineCode",{parentName:"h4"},"value = [1] * 100_000_000"),"  is going to return in ",(0,r.kt)("strong",{parentName:"h4"},"2.27s")," \ud83d\ude9c"),(0,r.kt)("p",null,"That's quite slow... The reason being is that this list is going to be interpret one element at a time in a loop. We can do better by trying to use all elements at the same time."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/haixuanTao/blogpost_ffi/blob/main/test_script.py"},"test_script.py")," for details on how the function is called.")),(0,r.kt)("h3",{id:"implementation-2-pybytes"},"Implementation 2: PyBytes"),(0,r.kt)("p",null,"Let's imagine that our array is a C-contiguous array that can be represented as a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html?highlight=bytes#bytes"},(0,r.kt)("inlineCode",{parentName:"a"},"PyBytes")),". The code can be optimized by casting the inputs and output as a ",(0,r.kt)("inlineCode",{parentName:"p"},"PyBytes"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[pyfunction]\nfn create_list_bytes<'a>(py: Python<'a>, a: &'a PyBytes) -> PyResult<&'a PyBytes> {\n    let s = a.as_bytes();\n\n    let output = PyBytes::new_with(py, s.len(), |bytes| {\n        bytes.copy_from_slice(s);\n        Ok(())\n    })?;\n    Ok(output)\n}\n")),(0,r.kt)("h4",{id:"-for-the-same-list-input-create_list_bytes-returns-in-78-milliseconds-thats-30x-better-"},"> For the same list input, ",(0,r.kt)("inlineCode",{parentName:"h4"},"create_list_bytes")," returns in ",(0,r.kt)("strong",{parentName:"h4"},"78 milliseconds"),". That's ",(0,r.kt)("strong",{parentName:"h4"},"30x")," better \ud83d\udc0e"),(0,r.kt)("p",null,"The speedup comes from the possibility to copy the memory range instead of iterating each element and to read without copying."),(0,r.kt)("p",null,"Now the issue is that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PyBytes")," is only available in Python meaning that if we plan to have other languages, we will have to replicate this for each language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PyBytes")," might also probably need to be reconverted into other useful types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PyBytes")," needs a copy to be created.")),(0,r.kt)("p",null,"We can try to solve this with ",(0,r.kt)("a",{parentName:"p",href:"https://arrow.apache.org/"},"Apache Arrow"),"."),(0,r.kt)("h3",{id:"implementation-3-apache-arrow"},"Implementation 3: ",(0,r.kt)("a",{parentName:"h3",href:"https://arrow.apache.org/"},"Apache Arrow")),(0,r.kt)("p",null,"Apache Arrow is a universal memory format available in many languages. "),(0,r.kt)("p",null,"The same function in ",(0,r.kt)("inlineCode",{parentName:"p"},"arrow")," would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[pyfunction]\nfn create_list_arrow(py: Python, a: &PyAny) -> PyResult<Py<PyAny>> {\n    let arraydata = arrow::array::ArrayData::from_pyarrow(a).unwrap();\n\n    let buffer = arraydata.buffers()[0].as_slice();\n    let len = buffer.len();\n\n    // Zero Copy Buffer reference counted\n    let arc_s = Arc::new(buffer.to_vec());\n    let ptr = NonNull::new(arc_s.as_ptr() as *mut _).unwrap();\n    let raw_buffer = unsafe { arrow::buffer::Buffer::from_custom_allocation(ptr, len, arc_s) };\n    let output = arrow::array::ArrayData::try_new(\n        arrow::datatypes::DataType::UInt8,\n        len,\n        None,\n        0,\n        vec![raw_buffer],\n        vec![],\n    )\n    .unwrap();\n\n    output.to_pyarrow(py)\n}\n\n")),(0,r.kt)("h4",{id:"-same-list-returns-in-33-milliseconds--thats-2x-better-than-pybytes-"},"> Same list returns in ",(0,r.kt)("strong",{parentName:"h4"},"33 milliseconds")," . That's ",(0,r.kt)("strong",{parentName:"h4"},"2x")," better than ",(0,r.kt)("inlineCode",{parentName:"h4"},"PyBytes")," \ud83d\udc0e\ud83d\udc0e"),(0,r.kt)("p",null,"This is due to having zero copy when sending back the result. The zero-copying is safe because we are reference-counting the array. The array will be deallocating once all reference has been removed. "),(0,r.kt)("p",null,"The benefits of ",(0,r.kt)("inlineCode",{parentName:"p"},"arrow")," is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to make zero-copy achievable, scaling better with bigger data."),(0,r.kt)("li",{parentName:"ul"},"being reusable in other languages. We only have to replace the last line of the function with the export to the other languages. "),(0,r.kt)("li",{parentName:"ul"},"having many types description including ",(0,r.kt)("inlineCode",{parentName:"li"},"List"),",",(0,r.kt)("inlineCode",{parentName:"li"},"Mapping")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Struct"),"."),(0,r.kt)("li",{parentName:"ul"},"being directly usable in ",(0,r.kt)("inlineCode",{parentName:"li"},"numpy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pandas"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"pytorch")," with zero-copy transmutation.")),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Dealing with efficient Interface is not the only challenge of bridging multiple languages. We also have to deal with cross-language debugging. "),(0,r.kt)("h3",{id:"unwrap"},(0,r.kt)("inlineCode",{parentName:"h3"},".unwrap()")),(0,r.kt)("p",null,"Our current implementation uses ",(0,r.kt)("inlineCode",{parentName:"p"},".unwrap()"),". However, this will panic the whole Python process if there is an error. "),(0,r.kt)("h4",{id:"-example-error"},"> Example error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: PyErr { type: <class 'TypeError'>, value: TypeError('Expected instance of pyarrow.lib.Array, got builtins.int'), traceback: None }', src/lib.rs:45:62\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\nTraceback (most recent call last):\n  File \"/home/peter/Documents/work/blogpost_ffi/test_script.py\", line 79, in <module>\n    array = blogpost_ffi.create_list_arrow(1)\npyo3_runtime.PanicException: called `Result::unwrap()` on an `Err` value: PyErr { type: <class 'TypeError'>, value: TypeError('Expected instance of pyarrow.lib.Array, got builtins.int'), traceback: None }\n")),(0,r.kt)("h3",{id:"eyre"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/eyre-rs/eyre"},"eyre")),(0,r.kt)("p",null,"Eyre is an easy idiomatic error handling library for Rust applications. We can use eyre by wrapping our ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3")," project with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3/eyre")," feature flag, to replace all our ",(0,r.kt)("inlineCode",{parentName:"p"},".unwrap()")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},'.context("our context")?'),". This will transform unrecoverable errors into recoverable Python errors while giving details about our errors."),(0,r.kt)("h4",{id:"-same-error-as-above-but-with-eyre-which-gives-a-better-looking-error-message"},"> Same error as above but with ",(0,r.kt)("inlineCode",{parentName:"h4"},"eyre")," which gives a better looking error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Could not convert arrow data\n\nCaused by:\n    TypeError: Expected instance of pyarrow.lib.Array, got builtins.int\n\nLocation:\n    src/lib.rs:75:50\n")),(0,r.kt)("p",null,"Implementation details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[pyfunction]\nfn create_list_arrow_eyre(py: Python, a: &PyAny) -> Result<Py<PyAny>> {\n    let arraydata =\n        arrow::array::ArrayData::from_pyarrow(a).context("Could not convert arrow data")?;\n\n    let buffer = arraydata.buffers()[0].as_slice();\n    let len = buffer.len();\n\n    // Zero Copy Buffer reference counted\n    let arc_s = Arc::new(buffer.to_vec());\n    let ptr = NonNull::new(arc_s.as_ptr() as *mut _).context("Could not create pointer")?;\n    let raw_buffer = unsafe { arrow::buffer::Buffer::from_custom_allocation(ptr, len, arc_s) };\n    let output = arrow::array::ArrayData::try_new(\n        arrow::datatypes::DataType::UInt8,\n        len,\n        None,\n        0,\n        vec![raw_buffer],\n        vec![],\n    )\n    .context("could not create arrow arraydata")?;\n\n    output\n        .to_pyarrow(py)\n        .context("Could not convert to pyarrow")\n}\n\n')),(0,r.kt)("h3",{id:"python-traceback-with-eyre"},"Python traceback with ",(0,r.kt)("inlineCode",{parentName:"h3"},"eyre")),(0,r.kt)("p",null,"I will mention that you might lose the Python traceback error when calling Python code from a Rust code."),(0,r.kt)("p",null,"I recommend using the following custom traceback method to have a descriptive error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[pyfunction]\nfn call_func_eyre(py: Python, func: Py<PyAny>) -> Result<()> {    \n    let _call_python = func.call0(py).context("function called failed")?;\n    Ok(())\n}\n\nfn traceback(err: pyo3::PyErr) -> eyre::Report {\n    let traceback = Python::with_gil(|py| err.traceback(py).and_then(|t| t.format().ok()));\n    if let Some(traceback) = traceback {\n        eyre::eyre!("{traceback}\\n{err}")\n    } else {\n        eyre::eyre!("{err}")\n    }\n}\n\n#[pyfunction]\nfn call_func_eyre_traceback(py: Python, func: Py<PyAny>) -> Result<()> {\n    let _call_python = func\n        .call0(py)\n        .map_err(traceback) // this will gives python traceback.\n        .context("function called failed")?;\n    Ok(())\n}\n')),(0,r.kt)("h4",{id:"-example-error-with-no-custom-traceback"},"> Example error with no custom traceback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---Eyre no traceback---\neyre no traceback says: function called failed\n\nCaused by:\n    AssertionError: I have no idea what is wrong\n\nLocation:\n    src/lib.rs:89:39\n------\n")),(0,r.kt)("h4",{id:"-better-errors-with-custom-traceback"},"> Better errors with custom traceback:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---Eyre traceback---\neyre traceback says: function called failed\n\nCaused by:\n    Traceback (most recent call last):\n      File "/home/peter/Documents/work/blogpost_ffi/test_script.py", line 96, in abc\n        assert False, "I have no idea what is wrong"\n\n    AssertionError: I have no idea what is wrong\n\nLocation:\n    src/lib.rs:96:9\n------\n')),(0,r.kt)("p",null,"With the traceback, we can quickly identify the root error. "),(0,r.kt)("h2",{id:"memory-management"},"Memory management"),(0,r.kt)("p",null,"Let's take another example, and imagine that we need to create arrays within a loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Unbounded memory growth\n#[pyfunction]\nfn unbounded_memory_growth(py: Python) -> Result<()> {\n    for _ in 0..10 {\n        let a: Vec<u8> = vec![0; 40_000_000];\n        let _ = PyBytes::new(py, &a);`\n        \n        std::thread::sleep(Duration::from_secs(1));\n    }\n\n    Ok(())\n")),(0,r.kt)("h4",{id:"-calling-this-function-will-consume-440mb-of-memory-"},"> Calling this function will consume 440MB of memory. \ud83d\udc4e"),(0,r.kt)("p",null,"What happened is that ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3")," memory model keeps all Python variables in memory until the GIL is released."),(0,r.kt)("p",null,"Therefore, if we create variables in a ",(0,r.kt)("inlineCode",{parentName:"p"},"pyfunction")," loop, all temporary variables are going to be kept until the GIL is released. "),(0,r.kt)("p",null,"This is due to ",(0,r.kt)("inlineCode",{parentName:"p"},"pyfunction")," locking the GIL by default."),(0,r.kt)("p",null,"By understanding the GIL-based memory model, we can use a scoped GIL to have the expected behaviour:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[pyfunction]\nfn bounded_memory_growth(py: Python) -> Result<()> {\n    py.allow_threads(|| {\n        for _ in 0..10 {\n            Python::with_gil(|py| {\n                let a: Vec<u8> = vec![0; 40_000_000];\n                let _bytes = PyBytes::new(py, &a);\n            \n                std::thread::sleep(Duration::from_secs(1));\n            });\n        }\n    });\n\n    // or\n    \n    for _ in 0..10 {\n        let pool = unsafe { py.new_pool() };\n        let py = pool.python();\n\n        let a: Vec<u8> = vec![0; 40_000_000];\n        let _bytes = PyBytes::new(py, &a);\n\n        std::thread::sleep(Duration::from_secs(1));\n    }\n\n    Ok(())\n}\n")),(0,r.kt)("h4",{id:"-calling-this-function-will-consume-80mb-of-memory-"},"> Calling this function will consume 80MB of memory. \ud83d\udc4d"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://pyo3.rs/main/memory.html#gil-bound-memory"},"More info can be found here"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/PyO3/pyo3/issues/3382"},"Possible fix in Pyo3 0.21!"))),(0,r.kt)("h2",{id:"race-condition"},"Race condition"),(0,r.kt)("p",null,"Let's take another example, and imagine that we need to process data in different threads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Function GIL Lock\n#[pyfunction]\nfn gil_lock() {\n    let start_time = Instant::now();\n    std::thread::spawn(move || {\n        Python::with_gil(|py| println!("This threaded print was printed after {:#?}", &start_time.elapsed()));\n    });\n\n    std::thread::sleep(Duration::from_secs(10));\n}\n')),(0,r.kt)("h4",{id:"-this-threaded-print-was-printed-after-100s-"},"> This threaded print was printed after 10.0s. \ud83d\ude22"),(0,r.kt)("p",null,"When using Python with ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3"),", we have to make sure to know exactly when the GIL is locked or unlocked to avoid race conditions. "),(0,r.kt)("p",null,"In the example above, the issue is that by default ",(0,r.kt)("inlineCode",{parentName:"p"},"pyo3")," is going to lock the GIL in the main function thread, therefore blocking the spawned thread that is waiting for the GIL."),(0,r.kt)("p",null,"If we use the GIL in the main function thread or release the GIL in the main function thread, there is no issue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// No gil lock\n#[pyfunction]\nfn gil_unlock() {\n    let start_time = Instant::now();\n    std::thread::spawn(move || {\n        std::thread::sleep(Duration::from_secs(10));\n    });\n\n    Python::with_gil(|py| println!("1. This was printed after {:#?}", &start_time.elapsed()));\n\n    // or\n\n    let start_time = Instant::now();\n    std::thread::spawn(move || {\n        Python::with_gil(|py| println!("2. This was printed after {:#?}", &start_time.elapsed()));\n    });\n    Python::with_gil(|py| {\n        py.allow_threads(|| {\n            std::thread::sleep(Duration::from_secs(10));\n        })\n    });\n}\n')),(0,r.kt)("h4",{id:"-1-was-printed-after-32\xb5s-and-2-was-printed-after-80\xb5s-so-there-was-no-race-condition-"},'> "1" was printed after 32\xb5s and "2" was printed after 80\xb5s, so there was no race condition. \ud83d\ude04'),(0,r.kt)("h2",{id:"tracing"},"Tracing"),(0,r.kt)("p",null,"As we can see, being able to measure the time spent when interfacing can be very valuable to identify bottlenecks. "),(0,r.kt)("p",null,"But measuring the time spent manually as we did before can be tedious. "),(0,r.kt)("p",null,"What we can do is use a tracing library to do it for us. ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"Opentelemetry")," can help us build a distributed observable system capable of bridging multiple languages. ",(0,r.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"Opentelemetry")," can be used for tracing, metrics and logs."),(0,r.kt)("p",null,"For example, if we add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// No gil lock\n#[pyfunction]\nfn global_tracing(py: Python, func: Py<PyAny>) {\n    // global::set_text_map_propagator(opentelemetry_jaeger::Propagator::new());\n    global::set_text_map_propagator(TraceContextPropagator::new());\n\n    // Connect to Jaeger Opentelemetry endpoint\n    // Start a new endpoint with:\n    // docker run -d -p6831:6831/udp -p6832:6832/udp -p16686:16686 jaegertracing/all-in-one:latest\n    let _tracer = opentelemetry_jaeger::new_agent_pipeline()\n        .with_endpoint("172.17.0.1:6831")\n        .with_service_name("rust_ffi")\n        .install_simple()\n        .unwrap();\n\n    let tracer = global::tracer("test");\n\n    // Parent Trace, first trace\n    let _ = tracer.in_span("parent_python_work", |cx| -> Result<()> { \n        std::thread::sleep(Duration::from_secs(1));\n        \n        let mut map = HashMap::new();\n        global::get_text_map_propagator(|propagator| propagator.inject_context(&cx, &mut map));\n\n        let output = func\n            .call1(py, (map,))\n            .map_err(traceback)\n            .context("function called failed")?;\n        let out_map: HashMap<String, String> = output.extract(py).unwrap();\n        let out_context = global::get_text_map_propagator(|prop| prop.extract(&out_map));\n\n        std::thread::sleep(Duration::from_secs(1));\n\n        let _span = tracer.start_with_context("after_python_work", &out_context); // third trace\n\n        Ok(())\n    });\n}\n')),(0,r.kt)("p",null,"And the following, in the Python code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def abc(cx):\n    propagator = TraceContextTextMapPropagator()\n    context = propagator.extract(carrier=cx)\n\n    with tracing.tracer.start_as_current_span(\n        name="Python_span", context=context\n    ) as child_span:\n        child_span.add_event("in Python!")\n        output = {}\n        tracing.propagator.inject(output)\n        time.sleep(2)\n    return output\n')),(0,r.kt)("p",null,"We will get the following traces:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5591).Z,width:"3944",height:"1551"})),(0,r.kt)("p",null,"Using this we can measure the time spent when interfacing languages, identify lock issues, and with the combination of logs and metrics, reduce the complexity of multi-language libraries."),(0,r.kt)("h1",{id:"dora-rs"},(0,r.kt)("a",{parentName:"h1",href:"https://github.com/dora-rs/dora"},"dora-rs")),(0,r.kt)("p",null,"Hopefully, this small blog post should help you identify FFI issues. "),(0,r.kt)("p",null,"All optimization above have already been implemented within ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dora-rs/dora"},"dora-rs")," that lets you build fast and simple dataflows using Rust, Python, C and C++."),(0,r.kt)("p",null,"You're very welcome to check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dora-rs/dora"},"dora-rs")," if bridging languages in a dataflow is your usecase."),(0,r.kt)("p",null,"We just recently opened a Discord and you can reach out there for literally any question, even just for a quick chat: ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/DXJ6edAtym"},"https://discord.gg/DXJ6edAtym")),(0,r.kt)("p",null,"I'm also going to present this FFI work at ",(0,r.kt)("a",{parentName:"p",href:"https://workshop2023.gosim.org/schedule#auto"},"GOSIM Workshop in Shanghai on the 23rd of Sept 2023"),"!"),(0,r.kt)("p",null,"For more info on ",(0,r.kt)("inlineCode",{parentName:"p"},"dora-rs"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Github: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dora-rs/dora"},"https://github.com/dora-rs/dora")),(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://dora.carsmos.ai/"},"https://dora.carsmos.ai/")),(0,r.kt)("li",{parentName:"ul"},"Discord: ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/XqhQaN8P"},"https://discord.gg/XqhQaN8P"))))}h.isMDXComponent=!0},5591:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blogpost_ffi-a663a0fdaf6f3a9acc323b2c364d01aa.png"}}]);