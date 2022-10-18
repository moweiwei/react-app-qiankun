export default function Loading(props) {
  const { loading } = props;
  return <>{loading && <h4 className='mainapp-loading'>loading...</h4>}</>;
}
