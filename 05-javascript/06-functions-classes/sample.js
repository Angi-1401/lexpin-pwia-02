/**
 * Sistema de gestión para un Gimnasio.
 * El gimnasio tiene dos tipos de miembros: los normales y los vip.
 *
 * Crear un sistema que registrar asistencias, calcular costos
 * mensuales según tipo de membresía, mostrar el perfil de los
 * miembros y, para los miembros VIP, agendar en el spa.
 */

class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.membershipType = "normal";
    this.attendances = [];
  }

  calculateMonthlyCost() {
    if (this.membershipType === "normal") {
      return 50; // costo mensual para miembros normales
    } else if (this.membershipType === "vip") {
      return 70; // costo mensual para miembros VIP
    }
  }

  appointAttendace(arrive, leave) {
    let record = [arrive, leave];
    this.attendances.push(record);
  }

  showAttendace() {
    console.log(`${this.name} Attendace Record:`);
    
    for (let record of this.attendances) {
      console.log(`Arrived at: ${record[0]}`);
      console.log(`Leave at: ${record[1]}`);
      console.log(`------------------------------`);
    }
  }

  showProfile() {
    console.log(
      `
      Nombre: ${this.name}
      Edad: ${this.age}
      Monto de la suscripción: $ ${this.calculateMonthlyCost()} (${this.membershipType})
      `,
    );
  }
}

class MemberVIP extends Member {
  constructor(name, age) {
    super(name, age);
    this.membershipType = "vip";
  }

  scheduleSpa(date) {
    console.log(`Spa agendado para ${this.name} el día ${date}`);
  }
}

let member = new Member("Juan", 30);
member.showProfile();

let vipMember = new MemberVIP("Ana", 28);
vipMember.showProfile();
vipMember.scheduleSpa("2026-10-30");

member.appointAttendace("2026-10-15 09:32 PM", "2026-10-15 010:21 PM");
member.appointAttendace("2026-10-16 08:00 AM", "2026-10-16 09:30 AM");
member.showAttendace();

vipMember.appointAttendace("2026-10-15 09:32 PM", "2026-10-15 010:21 PM");
vipMember.appointAttendace("2026-10-16 08:00 AM", "2026-10-16 09:30 AM");
vipMember.appointAttendace("2026-10-17 07:00 AM", "2026-10-17 08:00 AM");
vipMember.showAttendace();
