import React from 'react'

export const AdminLogin = () => {
  return (
    <div className='login-page' style={{padding:'1rem', backgroundImage:`url('/images/login-background.png')`, backgroundSize:'cover'}}>
        <div className='container'>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                <div className='video-container' >                    
                    <div>
                        <video src="/images/login-page-video.mp4" autoPlay loop></video>
                    </div>
                </div>
                <div className='login-form-container'>
                    <div className='login-header'>
                        <div className='logo-header'>
                            <img src="/images/logo-2.png" alt="logo" width="100%" />
                        </div>
                        <h2 className='hd-c'>Login to StudyCraft Admin Panel</h2>
                    </div>
                    <div className='login-form'>
                        <form action="">
                            <div className='form-group'>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='password' />
                            </div>
                            {/* <p className='hd-c' style={{textAlign:"center", marginBottom:'1rem'}}>New user in StudyCraft? <Link to='/register' style={{color:'#22218c'}}>resister</Link></p> */}
                            <div className='form-group'>
                                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                                    <input type="checkbox" placeholder='Enter your book edition' />
                                    <span className='hd-c'>Please read all product term & conditions</span>
                                </div>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn-theme-three' style={{width:'100%'}}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
