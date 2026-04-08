import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { BookOpen, Award, Clock } from "lucide-react";
import type { Course, Enrollment } from "@/types";

type EnrollmentWithCourse = Enrollment & { courses: Course };

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user!.id)
    .single();

  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", user!.id)
    .order("enrolled_at", { ascending: false });

  const firstName = profile?.full_name?.split(" ")[0] ?? "Estudiante";
  const enrolledCourses = (enrollments ?? []) as EnrollmentWithCourse[];
  const completed = enrolledCourses.filter((e) => e.completed_at).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-navy">
          ¡Hola, {firstName}! 👋
        </h1>
        <p className="text-slate text-sm mt-1">
          Aquí puedes ver tu progreso y continuar aprendiendo.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-border p-5">
          <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3">
            <BookOpen size={20} className="text-brand-blue" />
          </div>
          <p className="text-2xl font-black text-navy">{enrolledCourses.length}</p>
          <p className="text-sm text-slate mt-0.5">Cursos inscritos</p>
        </div>
        <div className="bg-white rounded-2xl border border-border p-5">
          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
            <Award size={20} className="text-green-500" />
          </div>
          <p className="text-2xl font-black text-navy">{completed}</p>
          <p className="text-sm text-slate mt-0.5">Completados</p>
        </div>
        <div className="bg-white rounded-2xl border border-border p-5 col-span-2 md:col-span-1">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-3">
            <Clock size={20} className="text-purple-500" />
          </div>
          <p className="text-2xl font-black text-navy">{enrolledCourses.length - completed}</p>
          <p className="text-sm text-slate mt-0.5">En progreso</p>
        </div>
      </div>

      {/* Enrolled courses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-navy">Mis Cursos</h2>
          <Link href="/dashboard/courses" className="text-sm text-brand-blue font-semibold hover:underline">
            Ver todos
          </Link>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-10 text-center">
            <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={24} className="text-brand-blue" />
            </div>
            <h3 className="font-black text-navy mb-2">Aún no tienes cursos</h3>
            <p className="text-slate text-sm mb-6">
              Explora nuestros programas de certificación y comienza tu carrera hoy.
            </p>
            <Link
              href="/dashboard/courses"
              className="inline-flex items-center gap-2 bg-gradient-brand text-white text-sm font-semibold px-6 py-3 rounded-xl hover:brightness-110 transition"
            >
              Ver cursos disponibles
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {enrolledCourses.map((enrollment) => {
              const course = enrollment.courses;
              const isCompleted = !!enrollment.completed_at;
              return (
                <Link
                  key={enrollment.id}
                  href={`/dashboard/courses/${course.slug}`}
                  className="bg-white rounded-2xl border border-border p-5 hover:border-brand-blue/30 hover:shadow-sm transition group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block text-xs font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-lg mb-2">
                        {course.category}
                      </span>
                      <h3 className="font-black text-navy text-sm group-hover:text-brand-blue transition">
                        {course.title}
                      </h3>
                    </div>
                    {isCompleted && (
                      <Award size={18} className="text-green-500 shrink-0 mt-1" />
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-muted mb-1">
                      <span>{isCompleted ? "Completado" : "En progreso"}</span>
                      <span>{isCompleted ? "100%" : "0%"}</span>
                    </div>
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-brand rounded-full"
                        style={{ width: isCompleted ? "100%" : "0%" }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Certificates */}
      {completed > 0 && (
        <div>
          <h2 className="text-lg font-black text-navy mb-4">Mis Certificados</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {enrolledCourses
              .filter((e) => e.completed_at && e.certificate_url)
              .map((enrollment) => (
                <a
                  key={enrollment.id}
                  href={enrollment.certificate_url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-border p-5 flex items-center gap-4 hover:border-brand-blue/30 hover:shadow-sm transition"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    <Award size={22} className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-black text-navy text-sm">{enrollment.courses.title}</p>
                    <p className="text-xs text-muted mt-0.5">
                      Completado el{" "}
                      {new Date(enrollment.completed_at!).toLocaleDateString("es-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
