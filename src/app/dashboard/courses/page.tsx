import { createClient } from "@/lib/supabase/server";
import { getServerT } from "@/lib/i18n/server";
import Link from "next/link";
import { CheckCircle, Lock, Play } from "lucide-react";
import type { Course, Enrollment } from "@/types";

const categoryColors: Record<string, string> = {
  CPO: "bg-blue-50 text-blue-600",
  CPI: "bg-purple-50 text-purple-600",
  Academia: "bg-cyan-50 text-cyan-600",
};

export default async function CoursesPage() {
  const supabase = await createClient();
  const t = await getServerT();
  const c = t.dashboard.courses;

  const { data: { user } } = await supabase.auth.getUser();

  const [{ data: courses }, { data: enrollments }] = await Promise.all([
    supabase.from("courses").select("*").eq("status", "published").order("category"),
    supabase.from("enrollments").select("course_id").eq("user_id", user!.id),
  ]);

  const enrolledIds = new Set((enrollments ?? []).map((e: Pick<Enrollment, "course_id">) => e.course_id));
  const allCourses = (courses ?? []) as Course[];
  const categories = ["CPO", "CPI", "Academia"] as const;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-navy">{c.title}</h1>
        <p className="text-slate text-sm mt-1">{c.subtitle}</p>
      </div>

      {allCourses.length === 0 ? (
        <div className="bg-white rounded-2xl border border-border p-10 text-center">
          <p className="text-slate text-sm">{c.empty}</p>
        </div>
      ) : (
        categories.map((category) => {
          const categoryCourses = allCourses.filter((course) => course.category === category);
          if (categoryCourses.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="text-lg font-black text-navy mb-4">{category}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {categoryCourses.map((course) => {
                  const enrolled = enrolledIds.has(course.id);
                  return (
                    <div key={course.id} className="bg-white rounded-2xl border border-border p-5 flex flex-col">
                      <div className="flex-1 mb-4">
                        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-lg mb-2 ${categoryColors[course.category]}`}>{course.category}</span>
                        <h3 className="font-black text-navy">{course.title}</h3>
                        {course.description && <p className="text-slate text-sm mt-1 line-clamp-2">{course.description}</p>}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-xl font-black text-navy">
                            {course.price_cents === 0 ? c.free : `$${(course.price_cents / 100).toFixed(0)} USD`}
                          </p>
                          {course.duration_minutes && <p className="text-xs text-muted mt-0.5">{course.duration_minutes} {c.minutes}</p>}
                        </div>
                        {enrolled ? (
                          <Link href={`/dashboard/courses/${course.slug}`} className="flex items-center gap-2 bg-green-50 text-green-600 text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-green-100 transition">
                            <Play size={16} />{c.continueCta}
                          </Link>
                        ) : (
                          <Link href={`/${course.category.toLowerCase()}`} className="flex items-center gap-2 bg-gradient-brand text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:brightness-110 transition">
                            <Lock size={16} />{c.enrollCta}
                          </Link>
                        )}
                      </div>
                      {enrolled && (
                        <div className="flex items-center gap-2 mt-3 text-xs text-green-600 font-semibold">
                          <CheckCircle size={14} />{c.enrolled}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
