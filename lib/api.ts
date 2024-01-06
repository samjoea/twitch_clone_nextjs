export const getUserProfile = async ({ email }: { email: string }) => {
   try {
      const res = await fetch(`/api/account/?email=${email}`, {
         method: 'GET',
      })
      console.log(await res.json())
      // return res.json()
   } catch (error) {
      console.log('errors:::::::::::', error)
   }
}