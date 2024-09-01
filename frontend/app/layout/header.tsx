import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-2 py-3 bg-green-200'>
        <h1 className='text-xl font-bold'>Study Books</h1>
        {/* TODO: emailをクリックでポッポーバーを表示しログアウトできるようにする */}
        <p>test@test.com</p>
    </header>
  )
}

export default Header