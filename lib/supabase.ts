import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 로컬 저장된 사전예약 데이터 조회 함수 (개발용)
export const getLocalPreorders = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('preorders')
    return data ? JSON.parse(data) : []
  }
  return []
}

// 로컬 저장된 클릭 데이터 조회 함수 (개발용)
export const getLocalClicks = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('preorder_clicks')
    return data ? JSON.parse(data) : []
  }
  return []
}

// 사전예약 클릭 이벤트 저장
export const recordPreorderClick = async (service: string) => {
  // Supabase가 설정되지 않은 경우 로컬 저장소에 저장
  if (!supabaseUrl || supabaseUrl === 'your-supabase-url') {
    console.log('Preorder click recorded locally:', { service, timestamp: new Date().toISOString() })
    
    // 로컬 스토리지에 저장
    if (typeof window !== 'undefined') {
      const existingData = localStorage.getItem('preorder_clicks') || '[]'
      const clicks = JSON.parse(existingData)
      clicks.push({ service, clicked_at: new Date().toISOString() })
      localStorage.setItem('preorder_clicks', JSON.stringify(clicks))
    }
    return
  }

  const { error } = await supabase
    .from('preorder_clicks')
    .insert([{ service }])
  
  if (error) {
    console.error('Error recording preorder click:', error)
  }
}

// 사전예약 정보 저장
export const savePreorder = async (service: string, email: string, marketingOptIn: boolean) => {
  // Supabase가 설정되지 않은 경우 로컬 저장소에 저장
  if (!supabaseUrl || supabaseUrl === 'your-supabase-url') {
    console.log('Preorder saved locally:', { service, email, marketingOptIn, timestamp: new Date().toISOString() })
    
    // 로컬 스토리지에 저장
    const existingData = localStorage.getItem('preorders') || '[]'
    const preorders = JSON.parse(existingData)
    preorders.push({ service, email, marketing_opt_in: marketingOptIn, created_at: new Date().toISOString() })
    localStorage.setItem('preorders', JSON.stringify(preorders))
    return
  }

  const { error } = await supabase
    .from('preorders')
    .insert([{ service, email, marketing_opt_in: marketingOptIn }])
  
  if (error) {
    console.error('Error saving preorder:', error)
    throw error
  }
} 