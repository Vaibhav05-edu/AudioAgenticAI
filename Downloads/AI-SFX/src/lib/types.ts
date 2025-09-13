export interface Project {
  id: number
  name: string
  description?: string
  created_at: string
  updated_at?: string
  is_active: boolean
}

export interface AudioFile {
  id: number
  filename: string
  original_filename: string
  file_size: number
  duration?: number
  format: string
  sample_rate?: number
  channels?: number
  bit_rate?: number
  uploaded_at: string
  project_id?: number
}

export interface ProcessingJob {
  id: number
  name: string
  description?: string
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
  progress: number
  current_step?: string
  error_message?: string
  output_path?: string
  created_at: string
  started_at?: string
  completed_at?: string
  project_id?: number
  audio_file_id?: number
}

export interface Effect {
  id: number
  name: string
  display_name: string
  description?: string
  category?: string
  parameters?: Record<string, any>
  is_enabled: boolean
  is_builtin: boolean
  created_at: string
  updated_at?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  size: number
  pages: number
}
