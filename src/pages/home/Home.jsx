import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useFatch from '../../connecttobackend/get/useFatch'
import usePost from '../../connecttobackend/post/usePost'
import './home.css'

const Home = () => {
  const navigate = useNavigate()
  const { data: courseList } = useFatch('apicourses')
  const postUser = usePost('apiregistrations/')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const formData = { name, phone }

  const handleSubmit = () => {
    postUser.mutate(formData, {
      onSuccess: () => {
        toast.success('Muvaffaqiyatli ro‘yxatdan o‘tildi!', { autoClose: 3000 })
        setName('')
        setPhone('')
      },
      onError: error => {
        const msg = error?.response?.data?.message || 'Xatolik yuz berdi, qayta urinib ko‘ring.'
        toast.error(msg, { autoClose: 4000 })
      },
    })
  }

  return (
    <div className='home'>
      <h1>Home</h1>







      {/* <button onClick={handleSubmit}>Yuborish</button>

      <input value={name} onChange={e => setName(e.target.value)} placeholder='Ism' />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder='Telefon' />

      <div className='courses'>
        {courseList?.map(course => (
          <button
            key={course.id}
            onClick={() => navigate(`/kurslar/kurs/${course.id}`)}
            className='btn-home'
          >
            {course.title}
          </button>
        ))}
      </div> */}

      <ToastContainer />
    </div>
  )
}

export default Home
