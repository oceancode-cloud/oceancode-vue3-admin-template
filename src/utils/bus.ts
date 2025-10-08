import mitt from 'mitt';
type Events = {
  [key:string]:any
}
const $bus = mitt<Events>();
export default $bus;