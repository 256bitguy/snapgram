 import {Routes,Route} from 'react-router-dom';
 import './globals.css'
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import Home from './_root/pages/Home';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
 const App=()=>{
    return (
         <main className='flex h-screen'>
            <Routes>
                {/**public routing */}
                <Route element={<AuthLayout/>}>
                <Route path='/sign-in' element={<SignInForm/>}/>
                <Route path='/sign-in' element={<SignUpForm/>}/>
                </Route>
                {/**private routing */}
                <Route element={< RootLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
         </main>
    )
}

export default App;