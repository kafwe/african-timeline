import useSWR from 'swr'

const fetchLocalFile = async (file) => {
    const response = await fetch(file)
    const data = await response.text()
    return data;
}

const useLocalFile = (file) => {
    const { data, error } = useSWR(file, fetchLocalFile)
  
    return {
      data,
      error,
      isLoading: !data && !error,
    };
  };
  
export default useLocalFile