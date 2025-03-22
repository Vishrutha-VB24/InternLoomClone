import {createFileRoute,  useNavigate} from '@tanstack/react-router'
import Login from '@/components/Login';
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})


function RouteComponent() {

  const {userInfo} = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(userInfo){
      navigate({to: '/login'})
    }
  }, []);
  useEffect(() => {
    if(userInfo){
      navigate({to: '/login'})
    }
  },[navigate, userInfo]);
  return (
    <Login></Login>
  )
}
