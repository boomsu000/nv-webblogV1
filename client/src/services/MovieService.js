import Api from '@/services/Api'
export default {
 index (search) {
 return Api().get('musers')
 },
 show (muserId) {
 return Api().get('muser/'+muserId)
 },
 post (muser) {
 return Api().post('muser', muser)
 },
 put (muser) {
 return Api().put('muser/'+muser.id, muser)
 },
 delete (muser) {
 return Api().delete('muser/'+muser.id, muser)
 },
}