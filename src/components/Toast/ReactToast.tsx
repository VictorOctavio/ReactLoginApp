import { Toaster, toast } from 'react-hot-toast';

export const ReactToast = () => {
   return (
      <Toaster position='bottom-right'/>
   );
}

export const managerNotifications = {
   toast: (msg: string, variant: 'error' | 'success') => {
      toast[variant](msg)
   },
   success(msg: string) {
      this.toast(msg, 'success')
   },
   error(msg: string) {
      this.toast(msg, 'error')
   }
}