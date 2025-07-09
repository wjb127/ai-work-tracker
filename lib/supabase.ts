import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 사전예약 클릭 이벤트 저장
export const recordPreorderClick = async (service: string) => {
  const { error } = await supabase
    .from('preorder_clicks')
    .insert([{ service }])
  
  if (error) {
    console.error('Error recording preorder click:', error)
  }
}

// 사전예약 정보 저장
export const savePreorder = async (service: string, email: string, marketingOptIn: boolean) => {
  const { error } = await supabase
    .from('preorders')
    .insert([{ service, email, marketing_opt_in: marketingOptIn }])
  
  if (error) {
    console.error('Error saving preorder:', error)
    throw error
  }
} 