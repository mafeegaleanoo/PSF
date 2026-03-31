// ============================================================
// PISCINAS SIN FRONTERAS — Core TypeScript Types
// ============================================================

// ── Users ─────────────────────────────────────────────────

export type UserRole = "student" | "instructor" | "admin";

export interface Profile {
  id: string; // matches auth.users.id
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: UserRole;
  phone: string | null;
  created_at: string;
  updated_at: string;
}

// ── Courses ───────────────────────────────────────────────

export type CourseCategory = "CPO" | "CPI" | "Academia";
export type CourseStatus = "draft" | "published" | "archived";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: CourseCategory;
  status: CourseStatus;
  price_cents: number; // stored in cents (USD)
  thumbnail_url: string | null;
  instructor_id: string;
  duration_minutes: number | null;
  created_at: string;
  updated_at: string;
}

// ── Modules & Lessons ─────────────────────────────────────

export interface Module {
  id: string;
  course_id: string;
  title: string;
  order_index: number;
  created_at: string;
}

export type LessonType = "video" | "text" | "quiz";

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  type: LessonType;
  content_url: string | null; // video URL or null for text
  content_text: string | null; // rich text for text lessons
  order_index: number;
  duration_seconds: number | null;
  is_free_preview: boolean;
  created_at: string;
}

// ── Progress ──────────────────────────────────────────────

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at: string | null;
  certificate_url: string | null;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  watch_seconds: number; // for video lessons
  completed_at: string | null;
}

// ── Quizzes ───────────────────────────────────────────────

export interface Quiz {
  id: string;
  lesson_id: string;
  passing_score: number; // 0–100
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question_text: string;
  options: string[]; // JSON array of answer choices
  correct_index: number;
  order_index: number;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  passed: boolean;
  answers: number[]; // selected option indices
  attempted_at: string;
}

// ── Orders ────────────────────────────────────────────────

export type OrderStatus = "pending" | "paid" | "refunded" | "failed";

export interface Order {
  id: string;
  user_id: string;
  course_id: string;
  stripe_payment_intent_id: string | null;
  amount_cents: number;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
}
