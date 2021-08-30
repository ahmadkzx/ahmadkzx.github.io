import PostItem from '../../components/Global/PostItem'

export default function PostsPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6"><PostItem /></div>
        <div className="col-12 col-md-6"><PostItem /></div>
        <div className="col-12 col-md-6"><PostItem /></div>
        <div className="col-12 col-md-6"><PostItem /></div>
      </div>
    </div>
  )
}