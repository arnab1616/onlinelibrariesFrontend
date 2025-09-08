import React from 'react'

export const Login = () => {
  return (
    <div className='login-page' style={{padding:'1rem'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
            <div style={{width:'100%', margin:'0 auto'}}>
                <div className='logo-header'>
                    <img src="/images/logo-2.png" alt="logo" width="100%" />
                </div>
                <h2 className='hd-c'>Login to StudyCraft</h2>
            </div>
            <div className='login-form-container' style={{width:'100%', margin:'0 auto'}}>
                <div>
                    <form action="">
                        <div className='form-group'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Email' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
